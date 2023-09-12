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

import { Card, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
// Data
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiProgress from "components/VuiProgress";
import VuiTypography from "components/VuiTypography";
import BarChart from "examples/Charts/BarCharts/BasicBarChart/index";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import { barChartDataDashboard, barChartOptionsDashboard } from "../../data/barChart";

const ActiveUsers = () => {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card>
      <VuiBox>
        <VuiBox
          mb="24px"
          height="220px"
          sx={{
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            borderRadius: "20px",
          }}
        >
          <BarChart
            barChartData={barChartDataDashboard}
            barChartOptions={barChartOptionsDashboard}
          />
        </VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
          Active Users
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" mb="40px">
          <VuiTypography variant="button" color="success" fontWeight="bold">
            (+23){" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              than last week
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
        <Grid container spacing="50px">
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiBox
                bgColor="info"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
              >
                <FaWallet color="#fff" size="12px" />
              </VuiBox>
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Users
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              32,984
            </VuiTypography>
            <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiBox
                bgColor="info"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
              >
                <IoIosRocket color="#fff" size="12px" />
              </VuiBox>
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Clicks
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              2,42M
            </VuiTypography>
            <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiBox
                bgColor="info"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
              >
                <FaShoppingCart color="#fff" size="12px" />
              </VuiBox>
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Sales
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              2,400$
            </VuiTypography>
            <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiBox
                bgColor="info"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
              >
                <IoBuild color="#fff" size="12px" />
              </VuiBox>
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Items
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              320
            </VuiTypography>
            <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
};

export default ActiveUsers;
