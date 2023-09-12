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

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-apex chart
import BasicRadarChart from "examples/Charts/RadarChart/BasicRadarChart";

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function RadarChart({ title, description, data, options }) {
  const renderChart = (
    <VuiBox>
      {title || description ? (
        <VuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
          {title && (
            <VuiBox mb={1}>
              <VuiTypography variant="lg" color="white">
                {title}
              </VuiTypography>
            </VuiBox>
          )}
          <VuiBox mb={2}>
            <VuiTypography component="div" variant="button" fontWeight="regular" color="text">
              {description}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      ) : null}
      {useMemo(
        () => (
          <VuiBox minHeight={{ md: "300px", xl: "500px" }}>
            <BasicRadarChart radarChartData={data} radarChartOptions={options} />
          </VuiBox>
        ),
        [data, options]
      )}
    </VuiBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of RadarChart
RadarChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the RadarChart
RadarChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default RadarChart;
