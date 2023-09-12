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
            Server Settings
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Please provide the server and Minecraft version you want to use.
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={2}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
            <FormField type="text" label="Address 1" placeholder="eg. Street 120" />
          </Grid>
          <Grid item xs={12}>
            <FormField type="text" label="Address 2" placeholder="eg. Street 220" />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <FormField type="text" label="Server" placeholder="eg. 2b2t.org" />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField type="number" label="Port" placeholder="25565" />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormField type="text" label="Version" placeholder="." />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default Address;
