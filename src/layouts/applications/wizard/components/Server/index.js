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

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

function Address() {
  return (
    <VuiBox>
      <VuiBox width="80%" textAlign="center" mx="auto" mb={4}>
        <VuiBox mb={1}>
          <VuiTypography variant="lg" fontWeight="bold" color="white">
            Are you living in a nice area?
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          One thing I love about the later sunsets is the chance to go for a walk through the
          neighborhood woods before dinner
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField type="text" label="Address 1" placeholder="eg. Street 120" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Address 2" placeholder="eg. Street 220" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField type="text" label="City" placeholder="eg. Tokyo" />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField type="text" label="State" placeholder="..." />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField type="text" label="ZIP" placeholder="7 letters" />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default Address;
