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
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiDropzone from "components/VuiDropzone";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function Pricing() {
  return (
    <Card sx={{ overflow: "visible", height: "100%" }}>
      <VuiBox mb={3}>
        <VuiTypography variant="h5" fontWeight="bold" color="white">
          Product Images
        </VuiTypography>
      </VuiBox>
      <VuiDropzone options={{ addRemoveLinks: true }} />
    </Card>
  );
}

export default Pricing;
