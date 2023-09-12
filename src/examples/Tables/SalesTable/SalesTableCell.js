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
import TableCell from "@mui/material/TableCell";

// Vision UI Dashboard PRO React components
import VuiTypography from "components/VuiTypography";
import VuiBox from "components/VuiBox";

function SalesTableCell({ title, content, image, noBorder, ...rest }) {
  let template;

  if (image) {
    template = (
      <TableCell {...rest} align="left" width="30%" sx={{ border: noBorder && 0 }}>
        <VuiBox display="flex" alignItems="center" width="max-content">
          <VuiBox component="img" src={image} alt={content} width="1.5rem" height="auto" />{" "}
          <VuiBox display="flex" flexDirection="column" ml={3}>
            <VuiTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </VuiTypography>
            <VuiTypography
              variant="button"
              color="white"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {content}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell {...rest} align="center" sx={{ border: noBorder && 0 }}>
        <VuiBox display="flex" flexDirection="column">
          <VuiTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}:
          </VuiTypography>
          <VuiTypography
            variant="button"
            fontWeight="medium"
            color="white"
            textTransform="capitalize"
          >
            {content}
          </VuiTypography>
        </VuiBox>
      </TableCell>
    );
  }

  return template;
}

// Setting default values for the props of SalesTableCell
SalesTableCell.defaultProps = {
  image: "",
  noBorder: false,
};

// Typechecking props for the SalesTableCell
SalesTableCell.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  noBorder: PropTypes.bool,
};

export default SalesTableCell;
