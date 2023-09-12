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

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import EventCalendar from "examples/Calendar";

// Calendar application components
import Header from "layouts/applications/calendar/components/Header";
import NextEvents from "layouts/applications/calendar/components/NextEvents";
import ProductivityChart from "layouts/applications/calendar/components/ProductivityChart";
import {
  lineChartDataProductivity,
  lineChartOptionsProductivity,
} from "layouts/applications/calendar/data/productivityChartData";

// Data
import calendarEventsData from "layouts/applications/calendar/data/calendarEventsData";

function Calendar() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={3} mb={8}>
        <VuiBox display="flex" justifyContent="flex-end" mt={1} mb={4} mx={2}>
          <Header />
        </VuiBox>
        <Grid container direction="row" justifyContent="flex-end" alignItems="stretch" spacing={3}>
          <Grid item xs={12} xl={8}>
            {useMemo(
              () => (
                <EventCalendar
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} xl={4}>
            <VuiBox
              display="flex"
              sx={{ flexDirection: "column", justifyContent: "space-between", height: "100%" }}
            >
              <VuiBox mb={3}>
                <NextEvents />
              </VuiBox>
              <VuiBox>
                <ProductivityChart
                  title="Productivity"
                  percentage={{ color: "success", label: "+5%", status: "more" }}
                  data={lineChartDataProductivity}
                  options={lineChartOptionsProductivity}
                />
              </VuiBox>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Calendar;
