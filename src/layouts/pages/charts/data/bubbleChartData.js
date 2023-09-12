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

function generateData(baseval, count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export const bubbleChartData = [
  {
    name: "Dataset 1",
    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
      min: 10,
      max: 30,
    }),
  },
  {
    name: "Dataset 2",
    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
      min: 10,
      max: 30,
    }),
  },
];

export const bubbleChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    stroke: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
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
      // shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: [success.main, info.main],
  },
  colors: [success.main, info.main],
};
