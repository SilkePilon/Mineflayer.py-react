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

function FullBody() {
  return (
    <Card sx={{ pt: "28px", height: "100%" }}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="36px">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Full Body
        </VuiTypography>
        <VuiBadge variant="contained" color="green" badgeContent="moderate" container />
      </VuiBox>
      <VuiBox>
        <VuiTypography variant="body2" color="text" fontWeight="regular" pb="22px">
          What matters is the people who are sparked by it. And the people who are liked.
        </VuiTypography>
      </VuiBox>
    </Card>
  );
}

export default FullBody;
