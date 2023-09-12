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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function MiniInfoCard({ color, icon, title, description }) {
  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox>
        <VuiBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="45px"
          height="45px"
          shadow="md"
          borderRadius="lg"
          mb="65px"
        >
          {icon}
        </VuiBox>
        <VuiBox>
          <VuiTypography fontSize={22} color="white" fontWeight="bold" textTransform="capitalize">
            {title}
          </VuiTypography>
          <VuiTypography variant="body2" color="text" fontWeight="regular">
            {description}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of MiniInfoCard
MiniInfoCard.defaultProps = {
  color: "info",
};

// Typechecking props for the MiniInfoCard
MiniInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default MiniInfoCard;
