// StartButton.js
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import VuiButton from "components/VuiButton";
import Link from "@mui/material/Link";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboards/default/components/WelcomeMark";
import Projects from "layouts/dashboards/default/components/Projects";
import OrderOverview from "layouts/dashboards/default/components/OrderOverview";
import SatisfactionRate from "layouts/dashboards/default/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboards/default/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/BasicLineChart";
import BarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import { lineChartDataDashboard } from "layouts/dashboards/default/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboards/default/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboards/default/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboards/default/data/barChartOptions";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StartButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    axios.get('http://localhost:5000/api/v1/start')
      .then(response => {
        setLoading(false);
        // handle response
      })
      .catch(error => {
        setLoading(false);
        // handle error
      });
  }

  return (
    <VuiButton
        onClick={handleClick} 
        disabled={loading}
        component={Link}
        size="small"
        // sx={{ color: "white !important", background: "red" }}
        sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
        color: `${white.main} !important`,
        background: linearGradient(
            gradients.cardDark.main,
            gradients.cardDark.state,
            gradients.cardDark.deg
        ),
        "&:hover": {
            background: linearGradient(
            gradients.success.main,
            gradients.success.state,
            gradients.cardDark.deg
            ),
        },
        })}
        fullWidth
    >
      {loading ? 'Loading...' : 'Start'}
    </VuiButton>
  );
}

export default StartButton;