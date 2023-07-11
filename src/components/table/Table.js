import { useEffect, useState } from "react";

import styles from "./style/table.module.css";
import {
  axios_,
  convertToCSV,
  jsonToArray,
  shufflTableColums,
  sortTable,
} from "../../utilities/utll";

import { IoIosMenu, IoMdRefresh } from "react-icons/io";

import { AiFillEdit, AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../store/store";
import { fieldsMap } from "../../constant/fieldsMap";

export default function Table({
  name = "",
  visibleFieldList = [],
  fetch = {},
  menuVisible = true,
  showEdit = false,
  onEdit = () => {},
}) {
  const { updateTableData, tbldata } = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [colOrder, setColOrder] = useState([]);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pagination
  // const [toShow, setToShow] = useState(5);
  // const [currengPage, setCurrentPage] = useState(1);

  let dragStartCol;
  let dragEndCol;

  useEffect(() => {
    if (!tbldata[name]) {
      fetchTableData();
    } else {
      setTableData(tbldata[name]);
    }
  }, [name, tbldata]);

  function filterTable(e) {
    try {
      let val = e.target.value;
      let filtered = tbldata[name];
      if (!val) {
        return setTableData(filtered);
      }

      filtered = filtered.filter((item, index) => {
        return (
          item.join().toLowerCase().includes(val.toLowerCase()) || index == 0
        );
      });

      setTableData(filtered);
    } catch (e) {
      console.log(e);
    }
  }

  function EditButton({ record }) {
    return (
      <div className={styles.editButton}>
        <AiFillEdit
          onClick={() => {
            onEdit.bind(this, record);
          }}
        />
      </div>
    );
  }
  function updateTableDataState(data) {
    setTableData(data);
    updateTableData(name, data);
    // returnPageData();
  }

  async function fetchTableData() {
    try {
      if (fetch?.api) {
        let res;
        if (fetch.type === "post") {
          setLoading(true);
          console.log("fetch.api, fetch.data", fetch.api, fetch.data);
          res = await axios_.post(fetch.api, fetch.data);
        } else {
          res = await axios_.get(fetch.api);
        }
        if (res.status == 200) {
          let data = res.data.Data;
          console.log("name", name, "DATA", data, "fieldsMap", fieldsMap[name]);
          if (data && data?.length > 0) {
            data = jsonToArray(data, fieldsMap, name, EditButton, showEdit);
            let obj = data[0].map((item, index) => index);
            setColOrder(obj);
            updateTableDataState(data);
          } else {
            updateTableDataState([]);
          }
        }
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function shuffleColumns(from, to) {
    if (from === to) return;
    let shuffled = [];
    colOrder.forEach((item, index) => {
      if (item === to) {
        shuffled.push(from);
        shuffled.push(to);
      } else if (!(item === from)) {
        shuffled.push(index);
      }
    });
    let obj = shufflTableColums(tableData, shuffled);

    updateTableDataState(obj);
  }
  function sort(order, index) {
    let sortedData = sortTable(tableData, order, index);
    updateTableDataState(sortedData);
  }
  function Column({ index }) {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {}, []);

    function dragStart(e, index) {
      dragStartCol = index;
    }

    function dragEnd(e, index) {
      e.preventDefault();
      shuffleColumns(dragStartCol, dragEndCol);
    }

    return (
      <div
        key={index}
        className={styles.column}
        draggable={true}
        onDragStart={(e) => dragStart.bind(this, e, index)()}
        onDragOver={(e) => {
          dragEndCol = index;
          e.preventDefault();
          e.stopPropagation();
        }}
        onDragEnd={(e) => {
          dragEnd.bind(this, e, index)();
        }}
      >
        {tableData.map((row, rowIndex) => {
          return (
            <span
              key={`${index}_${rowIndex}`}
              className={`${rowIndex !== 0 ? styles.cell : ""}`}
              style={{ "--col": tableData[0].length }}
            >
              {rowIndex === 0 && (
                <ContextMenu
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                  index={index}
                />
              )}
              {row[index]}
            </span>
          );
        })}
      </div>
    );
  }
  function ContextMenu({ showMenu, setShowMenu, index }) {
    return (
      <div
        className={styles.menu}
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <IoIosMenu />
        {showMenu && (
          <ul className={styles.menuList}>
            <li onClick={sort.bind(this, "asc", index)} key={`menu_1`}>
              <AiOutlineSortAscending />
              Ascending
            </li>
            <li onClick={sort.bind(this, "desc", index)} key={`menu_2`}>
              <AiOutlineSortDescending />
              Descending
            </li>
          </ul>
        )}
      </div>
    );
  }

  return (
    <>
      {menuVisible && (
        <div className={styles.mainMenu}>
          <IoMdRefresh
            className={`${styles.refreshButton} ${
              loading ? styles.animateRefreshButton : ""
            }`}
            onClick={fetchTableData}
          />
          <input
            className={styles.searchBox}
            placeholder="Search"
            onChange={filterTable}
          />
          <IoIosMenu
            onClick={() => {
              setShowMainMenu((prev) => !prev);
            }}
          />
          {showMainMenu && (
            <span onClick={() => convertToCSV(tableData)}>Export Csv</span>
          )}
        </div>
      )}

      {tableData && tableData.length > 0 ? (
        <div className={styles.table}>
          {tableData[0] &&
            tableData[0].length > 0 &&
            tableData[0].map((_, index) => {
              return <Column key={`col${index}`} index={index} />;
            })}
        </div>
      ) : (
        !loading && <div className={styles.noData}>No data available</div>
      )}

      {/* <div className={styles.Pagination}>
        <span>{`Showing ${1} to ${
          tbldata[name] ? tbldata[name].length - 1 : ""
        } of ${tableData.length - 1}`}</span>
        <span onClick={chagnePage.bind(this, "-1")}>{`< Prev`} </span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>..</span>
        <span onClick={chagnePage.bind(this, "+1")}>{` Next >`} </span>
      </div> */}
    </>
  );
}
