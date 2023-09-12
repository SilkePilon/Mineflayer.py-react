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
import Checkbox from "@mui/material/Checkbox";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function IdCell({ id, checked }) {
  return (
    <VuiBox display="flex" alignItems="center">
      <Checkbox
        defaultChecked={checked}
        sx={({ palette: { info } }) => ({
          "&.Mui-checked": {
            color: info.main,
          },
        })}
      />
      <VuiBox ml={1}>
        <VuiTypography variant="caption" fontWeight="medium" color="text">
          {id}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default value for the props of IdCell
IdCell.defaultProps = {
  checked: false,
};

// Typechecking props for the IdCell
IdCell.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default IdCell;
