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
import VuiBadge from "components/VuiBadge";

function Steps() {
  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox sx={{ height: "100%" }}>
        <VuiTypography variant="body2" color="white" fontWeight="medium" mb="72px">
          Steps
        </VuiTypography>
        <VuiBox mt={2} lineHeight={0}>
          <VuiTypography fontSize={22} color="white" fontWeight="bold">
            11.4K
          </VuiTypography>
        </VuiBox>
        <VuiBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </VuiBox>
    </Card>
  );
}

export default Steps;
