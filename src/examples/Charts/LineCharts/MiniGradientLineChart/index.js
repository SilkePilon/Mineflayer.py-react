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
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

function MiniGradientLineChart({ title, description, chart }) {
  const renderChart = (
    <>
      {title || description ? (
        <VuiBox p="12px 12px 0px 12px" display="flex" flexDirection="column">
          {title && (
            <VuiTypography
              variant="button"
              color="white"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
          )}
          {description}
        </VuiBox>
      ) : null}
      <VuiBox sx={{ maxHeight: "150px" }}>{chart}</VuiBox>
    </>
  );

  return title || description ? <Card sx={{ padding: "8px" }}>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MiniGradientLineChart
MiniGradientLineChart.defaultProps = {
  title: "",
  description: "",
  height: "6.25rem",
};

// Typechecking props for the MiniGradientLineChart
MiniGradientLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.oneOfType({}),
};

export default MiniGradientLineChart;
