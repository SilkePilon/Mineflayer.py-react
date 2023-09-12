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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import VuiSwitch from "components/VuiSwitch";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function ControllerCard({ color, state, icon, title, description, onChange }) {
  return (
    <Card sx={{ height: "100%", minHeight: "220px" }}>
      <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" lineHeight={1}>
          <VuiTypography variant="body2" color={state ? "white" : "text"}>
            {state ? "On" : "Off"}
          </VuiTypography>
          <VuiBox mr={1}>
            <VuiSwitch color="info" checked={state} onChange={onChange} />
          </VuiBox>
        </VuiBox>
        {icon}
        <VuiBox lineHeight={1}>
          <VuiTypography
            fontSize={16}
            color={state ? "white" : "text"}
            textTransform="capitalize"
            fontWeight="bold"
          >
            {title}
          </VuiTypography>
          {description ? (
            <VuiTypography variant="caption" color={state ? "white" : "text"}>
              {description}
            </VuiTypography>
          ) : null}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of ControllerCard
ControllerCard.defaultProps = {
  color: "info",
  state: false,
  description: "",
};

// Typechecking props for the ControllerCard
ControllerCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  state: PropTypes.bool,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ControllerCard;
