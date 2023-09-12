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

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// React-apex chart
import BasicLineChart from "../BasicLineChart";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";


function DefaultLineChart({ title, description, data, options }) {
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({ ...options });

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);
  return (
    <Card>
      <VuiBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        <VuiBox mb={1}>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            {title}
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiTypography component="div" variant="button" fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox sx={{minHeight: "300px"}}>
        {
          useMemo(() => (
            <BasicLineChart lineChartData={chartData} lineChartOptions={chartOptions}/>
          ), [data, options])
        }
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of DefaultLineChart
DefaultLineChart.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the DefaultLineChart
DefaultLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DefaultLineChart;
