import { useEffect, useState } from "react";

import styles from "./style/table.module.css";
import {
  axios_,
  convertToCSV,
  jsonToArray,
  shufflTableColums,
  sortTable,
} from "./../../_utilities/utll";

import { IoIosMenu, IoMdRefresh } from "react-icons/io";

import { AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../store/store";

export default function Table({
  name = "",
  visibleFieldList = [],
  fetch = {},
  menuVisible = true,
}) {
  const rawData = [
    {
      id: 1,
      portfolioName: "aa",
      portfolioOwner: null,
      dematAccountInstitutionId: "aa",
      dematAccountInstitution: null,
      dematAccountNo: "aa",
      dematAccountName: "aa",
      inceptionDate: "2023-01-01T00:00:00.000+00:00",
      portfolioSettlementPeriod: "2023-01-01T00:00:00.000+00:00",
      advisorName: "aa",
      benchmarkIndex: "aa",
      createdBy: 0,
      nomineeDetails: [
        {
          id: 1,
          nomineeName: "aa",
          nomineeAddress: "aa",
          nomineeDob: "2023-01-01T00:00:00.000+00:00",
          relationship: "aa",
          isMinor: "aa",
          guardianName: "aa",
          allocationPercentage: 22.0,
          createdBy: 0,
          createdAt: "2023-07-04T04:13:53.463+00:00",
        },
      ],
      userBankDetails: [
        {
          id: 1,
          financialInstitutionName: "aa",
          ifscCode: "aa",
          accountType: "aa",
          accountNo: "aa",
          accountName: "aa",
          isPrimary: "aa",
        },
      ],
      createdAt: "2023-07-04T04:13:53.429+00:00",
    },
  ];
  const { updateTableData, tbldata } = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [colOrder, setColOrder] = useState([]);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  let dragStartCol;
  let dragEndCol;

  useEffect(() => {
    console.log("Tally Name ", name);

    if (!tbldata[name]) {
      fetchTableData();
    } else {
      setTableData(tbldata[name]);
    }
  }, []);

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

  function updateTableDataState(data) {
    setTableData(data);
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
          setTableData(res.data.Data);
          data = jsonToArray(res.data.Data);
          let obj = data[0].map((item, index) => index);
          setColOrder(obj);
          updateTableDataState(data);
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
    console.log(index);
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
            <span key={`${index}_${rowIndex}`} className={`${styles.cell}`}>
              {row[index]}
              {rowIndex === 0 && (
                <ContextMenu
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                  index={index}
                />
              )}
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
      {tableData && tableData.length > 0 && (
        <div className={styles.table}>
          {tableData[0] &&
            tableData[0].length > 0 &&
            tableData[0].map((_, index) => {
              return <Column key={`col${index}`} index={index} />;
            })}
        </div>
      )}
      <div className={styles.Pagination}>
        <span>{`Showing ${1} to ${10} of 1000`}</span>
        <span>{`< Prev`}</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>..</span>
        <span>{` Next >`}</span>
      </div>
    </>
  );
}
