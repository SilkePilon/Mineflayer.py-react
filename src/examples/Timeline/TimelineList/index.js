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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Timeline context
import { TimelineProvider } from "examples/Timeline/context";

// Colors palette
import colors from "assets/theme/base/colors";

function TimelineList({ title, dark, children }) {
  const { info } = colors;

  return (
    <TimelineProvider value={dark}>
      <Card sx={{ background: dark ? info.main : null }}>
        <VuiBox>
          <VuiBox mb="30px">
            <VuiTypography variant="lg" fontWeight="bold" color={dark ? "white" : "white"}>
              {title}
            </VuiTypography>
          </VuiBox>
          <VuiBox>{children}</VuiBox>
        </VuiBox>
      </Card>
    </TimelineProvider>
  );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
  dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TimelineList;
