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

import { useMemo, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "examples/Cards/MasterCard";
import MiniInfoCard from "examples/Cards/InfoCards/MiniInfoCard";
import ControllerCard from "examples/Cards/ControllerCard";
import Calendar from "examples/Calendar";
import InvoicesList from "examples/Lists/InvoicesList";

// Widgets page components
import Steps from "layouts/pages/widgets/components/Steps";
import FullBody from "layouts/pages/widgets/components/FullBody";
import MediaPlayer from "layouts/pages/widgets/components/MediaPlayer";
import OrdersOverview from "layouts/pages/widgets/components/OrdersOverview";
import UpcomingEvents from "layouts/pages/widgets/components/UpcomingEvents";
import Chart from "layouts/pages/widgets/components/Chart";

// Data
import {
  progressLineChartData,
  progressLineChartOptions,
} from "layouts/pages/widgets/data/progressLineChartData";
import calendarEventsData from "layouts/pages/widgets/data/calendarEventsData";
import invoicesListData from "layouts/pages/widgets/data/invoicesListData";
import {
  incomeLineChartData,
  incomeLineChartOptions,
} from "layouts/pages/widgets/data/incomeChartData";
import {
  lineChartDataCalories,
  lineChartOptionsCalories,
} from "layouts/pages/widgets/data/caloriesChartData";

// Icons
import { IoIosMusicalNotes } from "react-icons/io";
import { BsBatteryCharging } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaPaypal, FaLightbulb } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { RiShareForwardFill } from "react-icons/ri";

function Widgets() {
  const [lights, setLights] = useState(false);

  const handleSetLights = () => setLights(!lights);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox my={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <VuiBox mb={3}>
                <MiniStatisticsCard
                  bgColor="info"
                  title={{ text: "battery health", fontWeight: "regular" }}
                  count="99 %"
                  icon={<BsBatteryCharging color="white" size="22px" />}
                />
              </VuiBox>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "music volume", fontWeight: "regular" }}
                count="15/100"
                icon={<IoIosMusicalNotes color="white" size="22px" />}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <Chart
                title="income"
                count="$130,832"
                percentage={{ color: "success", label: "+90%" }}
                data={incomeLineChartData}
                options={incomeLineChartOptions}
              />
            </Grid>
            <Grid item xs={12} lg={5} xl={6}>
              <ProgressLineChart
                icon={<AiFillCheckCircle color="white" size="22px" />}
                title="Tasks"
                count={480}
                progress={60}
                data={progressLineChartData}
                options={progressLineChartOptions}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <DefaultInfoCard
                icon={<IoWallet size="26px" color="white" />}
                title="salary"
                description="Belong Interactive"
                value="+$2000"
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <DefaultInfoCard
                icon={<FaPaypal color="white" size="22px" />}
                title="paypal"
                description="Freelance Payment"
                value="$455.00"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MasterCard number={4562112245947852} valid="05/24" cvv="09X" />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FullBody />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <ControllerCard
                state={lights}
                icon={<FaLightbulb color={lights ? "yellow" : "white"} size="52px" />}
                title="Lights"
                onChange={handleSetLights}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Chart
                title="calories"
                count={187}
                percentage={{ color: "success", label: "+5%" }}
                data={lineChartDataCalories}
                options={lineChartOptionsCalories}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <MiniInfoCard
                icon={<RiShareForwardFill color="white" size="22px" />}
                title={
                  <>
                    754&nbsp;
                    <VuiTypography variant="button" color="white" fontWeight="medium">
                      m
                    </VuiTypography>
                  </>
                }
                description="New York City"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Steps />
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            {useMemo(
              () => (
                <Calendar
                  header={{ title: "calendar", date: "Monday, 2021" }}
                  headerToolbar={false}
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  isWidgets // takes the styles if calendar is in the widgets page
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} lg={3}>
            <VuiBox mb={3}>
              <InvoicesList title="invoices" invoices={invoicesListData} />
            </VuiBox>
            <MediaPlayer />
          </Grid>
          <Grid item xs={12} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Widgets;
