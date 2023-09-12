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

import { useMemo, useState, useEffect } from "react";
// @mui material components
import Card from "@mui/material/Card";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
// react-apex components
import BasicBubbleChart from "examples/Charts/BubbleChart/BasicBubbleChart";
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

function BubbleChart({ title, description, data, options }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions])
  
  return (
    <Card>
      <VuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        <VuiBox mb={1}>
          <VuiTypography variant="lg" color="white">
            {title}
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiTypography component="div" variant="button" fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      {useMemo(
        () => (
          <VuiBox sx={{ minHeight: "300px" }}>
            <BasicBubbleChart bubbleChartData={chartData} bubbleChartOptions={chartOptions} />
          </VuiBox>
        ),
        [data, options]
      )}
    </Card>
  );
}

// Setting default values for the props of BubbleChart
BubbleChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BubbleChart
BubbleChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BubbleChart;
