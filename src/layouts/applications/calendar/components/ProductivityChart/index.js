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
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";

function Chart({ title, count, percentage, data, options }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);

  return (
    <Card sx={{ height: "100%", padding: "0px" }}>
      <VuiBox lineHeight={1} display="flex" flexDirection="column" p="22px" pb={0}>
        <VuiTypography
          variant="button"
          color="white"
          textTransform="capitalize"
          fontWeight="medium"
        >
          {title}
        </VuiTypography>
        <VuiTypography variant="button" fontWeight="medium" color="text" display="flex">
          <VuiTypography variant="button" fontWeight="bold" color={percentage.color} display="flex">
            {percentage.label}&nbsp;
            <VuiTypography variant="button" fontWeight="bold" color="white">
              {percentage.status}
            </VuiTypography>
          </VuiTypography>
          &nbsp;in 2021
        </VuiTypography>
      </VuiBox>
      <VuiBox sx={{ maxHeight: "150px" }}>
        {useMemo(
          () => (
            <BasicLineChart lineChartData={chartData} lineChartOptions={chartOptions} />
          ),
          [data, options]
        )}
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the Chart
Chart.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }).isRequired,
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Chart;
