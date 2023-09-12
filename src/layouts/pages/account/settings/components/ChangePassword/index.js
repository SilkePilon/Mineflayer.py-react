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
import VuiButton from "components/VuiButton";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

function ChangePassword() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <VuiBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <VuiTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </VuiTypography>
      </VuiBox>
    );
  });

  return (
    <Card id="change-password" sx={{zIndex: "-1"}}>
      <VuiBox mb="40px">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Change Password
        </VuiTypography>
      </VuiBox>
      <VuiBox component="form">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              label="current password"
              placeholder="Current Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="new password"
              placeholder="New Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="confirm new password"
              placeholder="Confirm Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid>
        </Grid>
        <VuiBox mt={6} mb={1}>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Password requirements
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={1}>
          <VuiTypography variant="body2" color="text">
            Please follow this guide for a strong password
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap">
          <VuiBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
            {renderPasswordRequirements}
          </VuiBox>
          <VuiBox ml="auto">
            <VuiButton variant="contained" color="info" size="small">
              update password
            </VuiButton>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ChangePassword;
