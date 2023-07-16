import React, { useEffect, useState } from "react";
import Category from "../../components/dashboard/Category";
import { LostandDamage } from "../../components/dashboard/LostDamage";
import { QuantityGraph } from "../../components/dashboard/QuantityGraph";
import styles from "../../components/dashboard/style.module.css";
import { SummaryWareHouse } from "../../components/dashboard/SummaryWareHouse";

const imageMapping = {
  Group: "/Images/totalGroup.svg",
  "Cost Category": "/Images/dollarsign.svg",
  "Cost Center": "/Images/cost-center.png",
  "Stock Godown": "/Images/godown.svg",
  "Stock Group": "/Images/stockgroup.svg",
  "Stock Category": "/Images/stock-category.png",
  "Stock Item": "/Images/stock.svg",
  "Voucher Type": "/Images/voucher-type.png",
  Transaction: "/Images/transaction.svg",
};

export default function Dashboard() {
  const [warHouseData, setWarHouseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datawarehouse.mayanksoftwares.com/api/Count/GetMasterCount",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response?.json();
          // Make sure data and data.Data are not null or undefined
          if (data && data.Data) {
            setWarHouseData(data.Data);
          } else {
            console.error("Invalid data format:", data);
          }
        } else {
          console.error("Request failed with status:", response?.status);
        }
      } catch (error) {
        console.error("Request failed with error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wareHouseTopSection}>
        <div className={styles.cardContainer}>
          {warHouseData?.map((item, index) => {
            const imagePath = imageMapping[item?.Name];
            return <Category key={index} item={item} imagePath={imagePath} />;
          })}
        </div>
      </div>

      <LostandDamage />
      <SummaryWareHouse />

      <QuantityGraph />
    </div>
  );
}
