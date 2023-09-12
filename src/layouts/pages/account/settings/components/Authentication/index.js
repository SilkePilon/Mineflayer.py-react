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
import Divider from "@mui/material/Divider";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiBadge from "components/VuiBadge";

function Authentication() {
  return (
    <Card id="2fa" sx={{ overflow: "visible" }}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Two-factor authentication
        </VuiTypography>
        <VuiBadge variant="contained" color="green" badgeContent="enabled" container />
      </VuiBox>
      <VuiBox>
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ sm: "column", md: "row" }}
        >
          <VuiTypography variant="body2" color="text">
            Security keys
          </VuiTypography>
          <VuiBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <VuiBox mx={{ xs: 0, sm: 2 }} mb={{ sm: 1, md: 0 }}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                No Security keys
              </VuiTypography>
            </VuiBox>
            <VuiButton variant="contained" color="info" size="small">
              add
            </VuiButton>
          </VuiBox>
        </VuiBox>
        <Divider light sx={{ my: "22px" }} />
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ sm: "column", md: "row" }}
        >
          <VuiTypography variant="body2" color="text">
            SMS number
          </VuiTypography>
          <VuiBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <VuiBox mx={{ xs: 0, sm: 2 }} mb={{ sm: 1, md: 0 }}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                +3012374423
              </VuiTypography>
            </VuiBox>
            <VuiButton variant="contained" color="info" size="small">
              edit
            </VuiButton>
          </VuiBox>
        </VuiBox>
        <Divider light sx={{ my: "22px" }} />
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ sm: "column", md: "row" }}
        >
          <VuiTypography variant="body2" color="text">
            Authenticator app
          </VuiTypography>
          <VuiBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <VuiBox mx={{ xs: 0, sm: 2 }} mb={{ sm: 1, md: 0 }}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Not Configured
              </VuiTypography>
            </VuiBox>
            <VuiButton variant="contained" color="info" size="small">
              set up
            </VuiButton>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Authentication;
