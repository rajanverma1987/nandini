import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day", { role: "style" }],
  ["Work", 11, "#528bbd"], // Custom color for "Work" slice
  ["Eat", 2, "#ff704e"], // Custom color for "Eat" slice
  ["Commute", 2, "#ffb039"], // Custom color for "Commute" slice
  ["Watch TV", 2, "#54bb5a"], // Custom color for "Watch TV" slice
  ["Sleep", 7, "#b375b3"], // Custom color for "Sleep" slice
];

export const options = {
  title: "My Daily Activities",
  pieSliceText: "value-and-percentage", // This setting displays values and percentages horizontally
  pieSliceTextStyle: {
    fontSize: 12, // Adjust the font size of the data labels
  },
  legend: {
    position: "labeled", // Display the legend along with the data labels
    alignment: "center", // Center-align the legend with the data labels
  },
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"355px"}
    />
  );
}
