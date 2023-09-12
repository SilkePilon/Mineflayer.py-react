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

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function Socials() {
  return (
    <VuiBox>
      <VuiTypography variant="h5" fontWeight="bold" color="white">
        Socials
      </VuiTypography>
      <VuiBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="shoppify handle" placeholder="@vision" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="facebook account" placeholder="https://..." />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="instagram account" placeholder="https://..." />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default Socials;
