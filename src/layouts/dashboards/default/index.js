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

// @mui material components
import Card from "@mui/material/Card";
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
import breakpoints from "assets/theme/base/breakpoints";
// Vision UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import linearGradient from "assets/theme/functions/linearGradient";
import VuiTypography from "components/VuiTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import Footer from "examples/Footer";
import Globe from "examples/Globe";
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SalesTable from "examples/Tables/SalesTable";
// Data
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import ActiveUsers from "./components/ActiveUsers";
import SalesOverview from "./components/SalesOverview";

import WelcomeMark from "layouts/dashboards/default/components/WelcomeMark";
import SatisfactionRate from "layouts/dashboards/default/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboards/default/components/ReferralTracking";
// icons
import { FaShoppingCart } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { IoWallet, IoDocumentText } from "react-icons/io5";
import api from "api"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import StartButton from './StartButton';
import { lineChartDataDashboard } from "layouts/dashboards/default/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboards/default/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboards/default/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboards/default/data/barChartOptions";
import colors from "assets/theme/base/colors";
// @mui material components

import Icon from "@mui/material/Icon";


// Vision UI Dashboard React components

import VuiProgress from "components/VuiProgress";
import VuiButton from "components/VuiButton";
import Link from "@mui/material/Link";



import Projects from "layouts/dashboards/default/components/Projects";
import OrderOverview from "layouts/dashboards/default/components/OrderOverview";


function Default() {
  const { values } = breakpoints;
  const { gradients } = colors;
  const { cardContent } = gradients;
  const data = api()
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Logged in as", fontWeight: "regular" }}
                count={`${data.username}`}
                percentage={{ color: "success", text: "" }}
                icon={{ color: "info", component: <img src={'https://mc-heads.net/avatar/'+ data.username + '/100.png'} alt="new" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Server" }}
                count={`${data.host}`}
                percentage={{ color: "success", text: data.ping + ' ms' }}
                icon={{ color: "info", component: <img src={'https://eu.mc-api.net/v3/server/favicon/'+ data.host} alt="new" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Coordinates" }}
                count={data.coords}
                percentage={{ color: "error", text: "" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total items" }}
                count={`${data.totalitems}`}
                percentage={{ color: "success", text: "" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={7}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Surrounding blocks
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      {data.username}{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                         at {data.coords}
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
            </Grid>
            <Grid item xs={12} lg={6} xl={5}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    LIVE CHAT
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Bot controller
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      ({data.username}){" "}
                      
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
              
                        
                        <StartButton />
                      </Stack>
                    
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiButton
                          component={Link}
                          href="https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboards/default/"
                          target="_blank"
                          rel="noreferrer"
                          size="small"
                          // sx={{ color: "white !important", background: "red" }}
                          sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
                            color: `${white.main} !important`,
                            background: linearGradient(
                              gradients.cardDark.main,
                              gradients.cardDark.state,
                              gradients.cardDark.deg
                            ),
                            "&:hover": {
                              background: linearGradient(
                                gradients.error.main,
                                gradients.error.state,
                                gradients.cardDark.deg
                              ),
                            },
                          })}
                          fullWidth
                        >
                          Stop
                        </VuiButton>
                      </Stack>
                      
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiButton
                          component={Link}
                          href="https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboards/default/"
                          target="_blank"
                          rel="noreferrer"
                          size="small"
                          // sx={{ color: "white !important", background: "red" }}
                          sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
                            color: `${white.main} !important`,
                            background: linearGradient(
                              gradients.cardDark.main,
                              gradients.cardDark.state,
                              gradients.cardDark.deg
                            ),
                            "&:hover": {
                              background: linearGradient(
                                gradients.warning.main,
                                gradients.warning.state,
                                gradients.cardDark.deg
                              ),
                            },
                          })}
                          fullWidth
                        >
                          Kill
                        </VuiButton>
                      </Stack>
                      
                    </Grid>
                    
                  </Grid>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
