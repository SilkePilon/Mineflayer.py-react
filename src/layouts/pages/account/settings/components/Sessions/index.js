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
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";

function Sessions() {
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <VuiBox lineHeight={1} mb="40px">
        <VuiBox>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Sessions
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" color="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove those that you do not
          recognize.
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{xs: "flex-start", lg: "center"}}
          width="100%"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <VuiBox display="flex" alignItems="center" mb={{sm: "6px", md: "0px"}}>
            <VuiBox textAlign="center" color="white" px={{ sm: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </VuiBox>
            <VuiBox height="100%" ml={2} lineHeight={1.4} mr={2}>
              <VuiTypography display="block" variant="button" fontWeight="regular" color="white">
                Bucharest 68.133.163.201
              </VuiTypography>
              <VuiTypography variant="caption" color="text">
                Your current session
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox display="flex" alignItems="center" width={{sm: "100%", md: "auto"}} justifyContent={{sm: "flex-end", md: "auto"}}>
            <VuiBadge
              variant="contained"
              size="sm"
              badgeContent="active"
              color="green"
              sx={{ fontSize: "10px" }}
              container
            />
            <VuiBox mx={{ sm: 5, md: 2 }} lineHeight={1}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                EU
              </VuiTypography>
            </VuiBox>
            <VuiTypography
              component="a"
              href="#"
              variant="button"
              color="success"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <Divider light />
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{xs: "flex-start", lg: "center"}}
          width="100%"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <VuiBox display="flex" alignItems="center" mr={2}>
            <VuiBox textAlign="center" color="white" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">desktop_windows</Icon>
            </VuiBox>
            <VuiBox ml={2}>
              <VuiTypography display="block" variant="body2" fontWeight="regular" color="white">
                Chrome on macOS
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox width={{sm: "100%", md: "auto"}} display="flex" alignItems="center" justifyContent={{sm: "flex-end", md: "auto"}}>
            <VuiBox mx={{ sm: 5, md: 2 }} lineHeight={1}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                US
              </VuiTypography>
            </VuiBox>
            <VuiTypography
              component="a"
              href="#"
              variant="button"
              color="success"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <Divider light />
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{xs: "flex-start", lg: "center"}}
          width="100%"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <VuiBox display="flex" alignItems="center" mr={2}>
            <VuiBox textAlign="center" color="white" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon fontSize="default">phone_iphone</Icon>
            </VuiBox>
            <VuiBox ml={2}>
              <VuiTypography display="block" variant="body2" fontWeight="regular" color="white">
                Safari on iPhone
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox width={{sm: "100%", md: "auto"}} display="flex" alignItems="center" justifyContent={{sm: "flex-end", md: "auto"}}>
            <VuiBox mx={{ sm: 5, md: 2 }} lineHeight={1}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                US
              </VuiTypography>
            </VuiBox>
            <VuiTypography
              component="a"
              href="#"
              variant="button"
              color="success"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>arrow_forward</Icon>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Sessions;
