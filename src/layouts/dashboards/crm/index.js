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
import Grid from "@mui/material/Grid";
import kalVisualsSquare from "assets/images/message-card-image.png";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Calendar from "examples/Calendar";
import MessageCard from "examples/Cards/MessageCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import Footer from "examples/Footer";
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import InvoicesList from "examples/Lists/InvoicesList";
import RankingsList from "examples/Lists/RankingsList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Welcome from "layouts/dashboards/crm/components/Welcome";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";
// Data
import invoicesListData from "layouts/dashboards/crm/data/invoicesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import { useMemo } from "react";
import {
  lineChartDataCRM1,
  lineChartDataCRM2,
  lineChartOptionsCRM1,
  lineChartOptionsCRM2,
} from "./data/lineChart";

function CRM() {
  const { transactionsData, revenueData } = rankingsListData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <MiniGradientLineChart
                    title="visitors"
                    description={
                      <VuiTypography variant="lg" color="white" fontWeight="bold">
                        5,927{" "}
                        <VuiTypography variant="button" color="success" fontWeight="bold">
                          +55%
                        </VuiTypography>
                      </VuiTypography>
                    }
                    chart={
                      <BasicLineChart
                        lineChartData={lineChartDataCRM1}
                        lineChartOptions={lineChartOptionsCRM1}
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MiniGradientLineChart
                    title="income"
                    description={
                      <VuiTypography variant="lg" color="white" fontWeight="bold">
                        $130,832{" "}
                        <VuiTypography variant="button" color="success" fontWeight="bold">
                          +90%
                        </VuiTypography>
                      </VuiTypography>
                    }
                    chart={
                      <BasicLineChart
                        lineChartData={lineChartDataCRM2}
                        lineChartOptions={lineChartOptionsCRM2}
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <PlaceholderCard title={{ variant: "lg", text: "New Tab" }} />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <VuiBox mt={3}>
                  {useMemo(
                    () => (
                      <Calendar
                        header={{ title: "calendar", date: "Monday, 2021" }}
                        headerToolbar={false}
                        initialView="dayGridMonth"
                        initialDate="2021-08-10"
                        events={calendarEventsData}
                        selectable
                        editable
                      />
                    ),
                    [calendarEventsData]
                  )}
                </VuiBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Welcome />
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                  <InvoicesList title="invoices" invoices={invoicesListData} />
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                  <MessageCard
                    image={kalVisualsSquare}
                    text={
                      <>
                        Today is Arthur's birthday.
                        <br /> Wish her the best of luck!
                      </>
                    }
                    button={{ color: "white", text: "send message" }}
                    action={{
                      type: "internal",
                      route: "/dashboards/crm",
                      color: "info",
                      label: "send message",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RankingsList
              title="transactions"
              date="23 - 30 March 2021"
              rankings={transactionsData}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RankingsList title="revenue" date="01 - 07 June 2021" rankings={revenueData} />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CRM;
