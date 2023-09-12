/** 

=========================================================
* Open Delivery Bot React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

import colors from "assets/theme/base/colors";

//theme colors
const { info } = colors;

export const barChartDataHorizontal = [
  {
    name: "Sales by age",
    data: [20, 30, 40, 20, 45],
  },
];

export const barChartOptionsHorizontal = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["16-20", "21-26", "26-30", "31-42", "42+"],
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "10px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "10px",
      },
    },
  },
  grid: {
    borderColor: "#56577A",
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: [info.main],
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 8,
      columnWidth: "40px",
    },
  },
};
