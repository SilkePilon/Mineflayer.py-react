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

import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import MixedChart from "examples/Charts/MixedChart";
import BubbleChart from "examples/Charts/BubbleChart";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PieChart from "examples/Charts/PieChart";
import RadarChart from "examples/Charts/RadarChart";
import PolarChart from "examples/Charts/PolarChart";

// Data
import {
  lineChartDataDefault,
  lineChartOptionsDefault,
} from "layouts/pages/charts/data/defaultLineChartData";
import {
  lineChartDataGradient,
  lineChartOptionsGradient,
} from "layouts/pages/charts/data/gradientLineChartData";
import {
  barChartDataVertical,
  barChartOptionsVertical,
} from "layouts/pages/charts/data/verticalBarChartData";
import {
  barChartDataHorizontal,
  barChartOptionsHorizontal,
} from "layouts/pages/charts/data/horizontalBarChartData";
import { mixedChartData, mixedChartOptions } from "layouts/pages/charts/data/mixedChartData";
import { bubbleChartData, bubbleChartOptions } from "layouts/pages/charts/data/bubbleChartData";
import {
  doughnutChartData,
  doughnutChartOptions,
} from "layouts/pages/charts/data/defaultDoughnutChartData";
import { pieChartData, pieChartOptions } from "layouts/pages/charts/data/pieChartData";
import { radarChartData, radarChartOptions } from "layouts/pages/charts/data/radarChartData";
import { polarChartData, polarChartOptions } from "layouts/pages/charts/data/polarChartData";

function Charts() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox my={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ lineHeight: 0 }}>
              <VuiTypography variant="h4" color="white" fontWeight="bold">
                Charts
              </VuiTypography>
              <VuiTypography variant="button" fontWeight="regular" color="text">
                Charts on this page use React-apex - Simple yet flexible JavaScript charting for
                designers & developers.
              </VuiTypography>
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <DefaultLineChart
                    title="Line chart"
                    data={lineChartDataDefault}
                    options={lineChartOptionsDefault}
                  />
                ),
                [lineChartDataDefault, lineChartOptionsDefault]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <GradientLineChart
                    title="Line chart with gradient"
                    data={lineChartDataGradient}
                    options={lineChartOptionsGradient}
                  />
                ),
                [lineChartDataGradient, lineChartOptionsGradient]
              )}
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <VerticalBarChart
                    title="Bar chart"
                    data={barChartDataVertical}
                    options={barChartOptionsVertical}
                  />
                ),
                [barChartDataVertical, barChartOptionsVertical]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <HorizontalBarChart
                    title="Bar chart horizontal"
                    data={barChartDataHorizontal}
                    options={barChartOptionsHorizontal}
                  />
                ),
                [barChartDataHorizontal, barChartOptionsHorizontal]
              )}
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <MixedChart
                    title="Mixed chart"
                    data={mixedChartData}
                    options={mixedChartOptions}
                  />
                ),
                [mixedChartData, mixedChartOptions]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <BubbleChart
                    title="Bubble chart"
                    data={bubbleChartData}
                    options={bubbleChartOptions}
                  />
                ),
                [bubbleChartData, bubbleChartOptions]
              )}
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <DefaultDoughnutChart
                    title="Doughnut chart"
                    data={doughnutChartData}
                    options={doughnutChartOptions}
                  />
                ),
                [doughnutChartData, doughnutChartOptions]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <PieChart title="Pie chart" data={pieChartData} options={pieChartOptions} />
                ),
                [pieChartData, pieChartOptions]
              )}
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <RadarChart
                    title="Radar chart"
                    data={radarChartData}
                    options={radarChartOptions}
                  />
                ),
                [radarChartData, radarChartOptions]
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {useMemo(
                () => (
                  <PolarChart
                    title="Polar chart"
                    data={polarChartData}
                    options={polarChartOptions}
                  />
                ),
                [polarChartData, polarChartOptions]
              )}
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Charts;
