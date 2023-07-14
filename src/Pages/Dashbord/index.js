import React, { useEffect, useState } from "react";
import { LostandDamage } from "../../components/dashboard/LostDamage";
import { QuantityGraph } from "../../components/dashboard/QuantityGraph";
import styles from "../../components/dashboard/style.module.css";
import { SummaryWareHouse } from "../../components/dashboard/SummaryWareHouse";

const imageMapping = {
  Group: "/Images/Group.png",
  "Cost Category": "/Images/cost-category.png",
  "Cost Center": "/Images/cost-center.png",
  "Stock Godown": "/Images/stock-godown.png",
  "Stock Group": "/Images/stock-group.svg",
  "Stock Category": "/Images/stock-category.png",
  "Stock Item": "/Images/stock-item.png",
  "Voucher Type": "/Images/voucher-type.png",
  Transaction: "/Images/transaction.png",
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
          const data = await response.json();
          setWarHouseData(data?.Data);
        } else {
          console.error("Request failed with status:", response.status);
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
        <h3>Warehouse</h3>
        <div className={styles.wareHouseSection}>
          {warHouseData?.map((item, index) => {
            const imagePath = imageMapping[item?.Name];
            return (
              <div className={styles.wareHouseList} key={index}>
                <div className={styles.wareHouseIcon}>
                  {imagePath && <img src={imagePath} alt="item icon" />}
                </div>
                <div className={styles.wareHouseDetails}>
                  <h4>{item?.Total}</h4>
                  <p>Total {item.Name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LostandDamage />
      <SummaryWareHouse />
      <QuantityGraph />
    </div>
  );
}
