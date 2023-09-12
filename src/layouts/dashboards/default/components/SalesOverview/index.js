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

import { Card } from "@mui/material";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
import { lineChartDataDashboard, lineChartOptionsDashboard } from "../../data/lineChart";

const SalesOverview = () => {
  return (
    <Card>
      <VuiBox sx={{ height: "100%" }}>
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
          Sales Overview
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" mb="40px">
          <VuiTypography variant="button" color="success" fontWeight="bold">
            +5% more{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              in 2021
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
        <VuiBox sx={{ height: "310px" }}>
          <BasicLineChart
            lineChartData={lineChartDataDashboard}
            lineChartOptions={lineChartOptionsDashboard}
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default SalesOverview;
