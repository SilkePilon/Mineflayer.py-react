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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function TableCell({ width, align, padding, noBorder, children }) {
  const { grey } = colors;
  const { borderWidth } = borders;

  return (
    <VuiBox
      component="th"
      width={width}
      pt={padding[0]}
      pr={padding[1]}
      pb={padding[2]}
      pl={padding[3]}
      textAlign={align}
      borderBottom={noBorder ? 0 : `${borderWidth[1]} solid ${grey[700]}`}
    >
      <VuiTypography component="div" variant="body2" color="text">
        {children}
      </VuiTypography>
    </VuiBox>
  );
}

// Setting default values for the props of TableCell
TableCell.defaultProps = {
  width: "auto",
  align: "left",
  padding: [],
  noBorder: false,
};

// Typechecking props for TableCell
TableCell.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  padding: PropTypes.arrayOf(PropTypes.number),
  noBorder: PropTypes.bool,
};

export default TableCell;
