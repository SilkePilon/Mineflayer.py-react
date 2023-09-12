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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Images
import image from "assets/images/product-page.png";
function ProductImage() {
  return (
    <Card sx={{ height: "100%", p: "10px" }}>
      <VuiBox p={3}>
        <VuiTypography variant="h5" fontWeight="bold" color="white">
          Product Image
        </VuiTypography>
        <VuiBox
          component="img"
          src={image}
          alt="Product Image"
          borderRadius="lg"
          shadow="lg"
          width="100%"
          my={3}
        />
        <VuiBox display="flex">
          <VuiButton variant="contained" color="info" size="small" sx={{ mr: "8px" }}>
            edit
          </VuiButton>
          <VuiButton variant="outlined" color="white" size="small">
            remove
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ProductImage;
