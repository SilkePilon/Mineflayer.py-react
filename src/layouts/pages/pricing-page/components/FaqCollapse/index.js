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
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FaqCollapse({ title, open, children, ...rest }) {

  return (
    <VuiBox mb={2}>
      <VuiBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ cursor: "pointer" }}
      >
        <VuiTypography variant="lg" color="white" sx={{ userSelect: "none" }}>
          {title}
        </VuiTypography>
        <VuiBox color="white">
          {open ? <IoIosArrowUp color="dark" /> : <IoIosArrowDown color="white" />}
        </VuiBox>
      </VuiBox>
      <Collapse timeout={400} in={open}>
        <VuiBox p={2} lineHeight={1}>
          <VuiTypography variant="button" color="white" opacity={0.8} fontWeight="regular">
            {children}
          </VuiTypography>
        </VuiBox>
      </Collapse>
    </VuiBox>
  );
}

// Typechecking props for the FaqCollapse
FaqCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default FaqCollapse;
