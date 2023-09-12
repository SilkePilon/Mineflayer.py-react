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
const { success, info } = colors;

export const mixedChartData = [
  {
    name: "Organic Search",
    type: "bar",
    data: [440, 505, 414, 671, 160, 550, 350, 138],
  },
  {
    name: "Referral",
    type: "line",
    data: [232, 421, 352, 273, 143, 222, 173, 311],
  },
];

export const mixedChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
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
  fill: {
    type: "solid",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0.5,
      stops: [],
    },
    colors: [success.main, info.main],
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: "8px",
    },
  },
  colors: [success.main, info.main],
};
