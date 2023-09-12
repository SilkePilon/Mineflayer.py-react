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
const { charts } = info;

export const polarChartOptions = {
  chart: {
    type: "polarArea",
    toolbar: {
      show: false,
    },
  },
  labels: ["Subject 1", "Subject2", "Subject 3", "Subject 4"],
  colors: [charts[100], charts[200], charts[400], charts[500]],
  chart: {
    width: "100%",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        fontSize: "14px",
        color: "#8F9BBA",
      },
    },
  },
  markers: {
    show: false,
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: [charts[100], charts[200], charts[400], charts[500]],
    dashArray: 0,
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 1,
        strokeColor: "#56577A",
      },
      spokes: {
        strokeWidth: 1,
        connectorColors: "#56577A",
      },
    },
  },
  fill: {
    type: "solid",
    opacity: 1,
    colors: [charts[100], charts[200], charts[400], charts[500]],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const polarChartData = [7, 14, 20, 25];
