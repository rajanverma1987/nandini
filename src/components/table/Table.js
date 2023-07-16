import { useEffect, useState } from "react";

import styles from "./style/table.module.css";
import {
  axios_,
  convertToCSV,
  jsonToArray,
  shufflTableColums,
  sortTable,
} from "../../utilities/utll";

import { IoIosMenu, IoMdDownload, IoMdRefresh } from "react-icons/io";

import { AiFillEdit, AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../store/store";
import { fieldsMap } from "../../constant/fieldsMap";
import { BsCloudDownloadFill } from "react-icons/bs";
import Pagination from "../pagination/Pagination";

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
  const [loading, setLoading] = useState(false);

  // Paginnation
  const [toShow, setToShow] = useState(25);
  const [currengPage, setCurrentPage] = useState(1);

  let dragStartCol;
  let dragEndCol;

  useEffect(() => {
    fetchTableData();
  }, [name, fetch.data]);

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
            onEdit(record);
          }}
          fill="#16619f"
        />
      </div>
    );
  }
  function updateTableDataState(data) {
    let pageRows = displayPageRow(data);
    setTableData(pageRows);
    updateTableData(name, data);
  }

  async function fetchTableData() {
    try {
      if (fetch?.api) {
        let res;
        if (fetch.type === "post") {
          setLoading(true);
          res = await axios_.post(fetch.api, fetch.data);
        } else {
          res = await axios_.get(fetch.api);
        }
        if (res.status == 200) {
          let data = res.data.Data;

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
    }
  }

  function onPageChange(numberOfRecords, currenPageNumber) {
    let pageData =
      tbldata[name] &&
      tbldata[name].length > 0 &&
      tbldata[name].filter((_, index) => {
        return (
          index == 0 ||
          (index > (currenPageNumber - 1) * numberOfRecords &&
            index <= currenPageNumber * numberOfRecords)
        );
      });

    setTableData(pageData);
  }

  function displayPageRow(data) {
    return data.filter((row, index) => index <= toShow);
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

  function ContextMenu({ index }) {
    const [showMenu, setShowMenu] = useState(false);
    return (
      <div className={styles.menu}>
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

  function dragStart(e, index) {
    dragStartCol = index;
  }

  function dragEnd(e, index) {
    e.preventDefault();
    shuffleColumns(dragStartCol, dragEndCol);
  }

  return (
    <div className={styles.gridContainer}>
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

          <span
            className={styles.downloadButton}
            onClick={() => convertToCSV(tbldata[name], name)}
          >
            <BsCloudDownloadFill />
          </span>
          {tbldata[name] && tbldata[name].length > 0 && (
            <Pagination
              onChange={onPageChange}
              totalRecord={tbldata[name].length}
            />
          )}
        </div>
      )}
      <div className={styles.tableContainer}>
        {tableData && tableData.length > 0 ? (
          <table className={styles.table}>
            <tbody>
              {tableData[0] &&
                tableData[0].length > 0 &&
                tableData.map((_, index) => {
                  return (
                    <tr key={`tr${index}`}>
                      {tableData[index].map((cell, colIndex) => {
                        if (index === 0) {
                          return (
                            <th
                              key={`th${colIndex}`}
                              draggable={true}
                              onDragStart={(e) =>
                                dragStart.bind(this, e, colIndex)()
                              }
                              onDragOver={(e) => {
                                dragEndCol = colIndex;
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onDragEnd={(e) => {
                                dragEnd.bind(this, e, colIndex)();
                              }}
                            >
                              <span>
                                <span className={styles.menu}>
                                  <ContextMenu index={colIndex} />
                                </span>{" "}
                                {cell}
                              </span>
                            </th>
                          );
                        } else {
                          return (
                            <td className={styles.cell} key={`td${colIndex}`}>
                              {cell}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          !loading && <div className={styles.noData}>No data available</div>
        )}
      </div>
    </div>
  );
}
