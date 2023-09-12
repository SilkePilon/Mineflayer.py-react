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
import Switch from "@mui/material/Switch";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiSwitch from "components/VuiSwitch";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function DeleteAccount() {
  return (
    <Card id="delete-account">
      <VuiBox lineHeight={1} mb="40px">
        <VuiBox>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Delete Account
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" color="text" fontWeight="regular">
          Once you delete your account, there is no going back. Please be certain.
        </VuiTypography>
      </VuiBox>
      <VuiBox
        display="flex"
        justifyContent="space-between"
        alignItems={{ sm: "flex-start", md: "center" }}
        flexDirection={{ sm: "column", md: "row" }}
      >
        <VuiBox display="flex" alignItems="center" mb={{ sm: 3, md: 0 }}>
          <VuiSwitch color="info" />
          <VuiBox ml={2} lineHeight={0}>
            <VuiTypography display="block" variant="button" color="white" fontWeight="medium">
              Confirm
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              I want to delete my account.
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <VuiButton variant="outlined" color="white">
            deactivate
          </VuiButton>
          <VuiBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <VuiButton variant="contained" color="error" sx={{ height: "100%" }}>
              delete account
            </VuiButton>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default DeleteAccount;
