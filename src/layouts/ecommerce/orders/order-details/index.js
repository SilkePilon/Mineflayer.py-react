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
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// OrderDetails page components
import Header from "layouts/ecommerce/orders/order-details/components/Header";
import OrderInfo from "layouts/ecommerce/orders/order-details/components/OrderInfo";
import TrackOrder from "layouts/ecommerce/orders/order-details/components/TrackOrder";
import PaymentDetails from "layouts/ecommerce/orders/order-details/components/PaymentDetails";
import BillingInformation from "layouts/ecommerce/orders/order-details/components/BillingInformation";
import OrderSummary from "layouts/ecommerce/orders/order-details/components/OrderSummary";

function OrderDetails() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox my={7}>
        <VuiBox mx="auto" display="flex" justifyContent="center" maxWidth="780px">
          <Card sx={{ padding: "20px" }}>
            <VuiBox pt={2} px={2}>
              <Header />
            </VuiBox>
            <Divider light />
            <VuiBox pt={1} pb={3} px={2}>
              <VuiBox mb={3}>
                <OrderInfo />
              </VuiBox>
              <Divider light />
              <VuiBox mt={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={4}>
                    <TrackOrder />
                  </Grid>
                  <Grid item xs={12} md={6} lg={5}>
                    <PaymentDetails />
                    <VuiBox mt={3}>
                      <BillingInformation />
                    </VuiBox>
                  </Grid>
                  <Grid item xs={12} lg={3} sx={{ ml: "auto" }}>
                    <OrderSummary />
                  </Grid>
                </Grid>
              </VuiBox>
            </VuiBox>
          </Card>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderDetails;
