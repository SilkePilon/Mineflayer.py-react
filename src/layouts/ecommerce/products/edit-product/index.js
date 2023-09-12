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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
import ProductImage from "layouts/ecommerce/products/edit-product/components/ProductImage";
import ProductInfo from "layouts/ecommerce/products/edit-product/components/ProductInfo";
import ProductUpload from "layouts/ecommerce/products/edit-product/components/ProductUpload";
import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";

function EditProduct() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox my={3} mb="30px">
        <VuiBox mb={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <VuiTypography variant="h4" fontWeight="medium" color="white">
                Make the changes below
              </VuiTypography>
              <VuiBox mt={1} mb={2}>
                <VuiTypography variant="body2" color="text">
                  We’re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </VuiTypography>
              </VuiBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <VuiBox display="flex" justifyContent="flex-end">
                <VuiButton variant="contained" color="info">
                  save
                </VuiButton>
              </VuiBox>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid container item xs={12} lg={5} spacing={3} sx={{ height: "100%" }}>
            <Grid item xs={12}>
              <ProductImage />
            </Grid>
            <Grid item xs={12} sx={{ height: "100%" }}>
              <Socials />
            </Grid>
          </Grid>
          <Grid container item xs={12} lg={7} spacing={3}>
            <Grid item xs={12}>
              <ProductInfo />
            </Grid>
            <Grid item xs={12}>
              <Pricing />
            </Grid>
            <Grid item xs={12}>
              <ProductUpload />
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditProduct;
