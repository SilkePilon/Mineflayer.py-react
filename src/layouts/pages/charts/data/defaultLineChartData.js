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

// Theme colors
const { success, info, lightblue } = colors;

export const lineChartDataDefault = [
  {
    name: "Organic Search",
    data: [330, 150, 300, 220, 500, 250, 400, 230, 500],
  },
  {
    name: "Referral",
    data: [500, 400, 40, 140, 290, 290, 340, 230, 200],
  },
  {
    name: "Direct",
    data: [45, 23, 550, 33, 290, 150, 230, 340, 100],
  },
];

export const lineChartOptionsDefault = {
  chart: {
    toolbar: {
      show: false,
    },
    type: "line",
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "10px",
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "10px",
      },
    },
  },
  legend: {
    show: false,
  },
  gradient: false,
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
        show: true,
      },
    },
  },
  markers: {
    size: 4,
    colors: [success.main, info.main, lightblue.main],
    strokeColors: [success.main, info.main, lightblue.main],
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  fill: {
    type: "solid",
    colors: ["#fff", "#fff", "#fff"],
    opacity: "0",
  },
  colors: [success.main, info.main, lightblue.main],
};
