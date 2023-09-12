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
import VuiAvatar from "components/VuiAvatar";

function ProductCell({ image, name }) {
  return (
    <VuiBox display="flex" alignItems="center" pr={2}>
      <VuiBox
        component="img"
        mr={2}
        src={image}
        alt={name}
        sx={({ borders: { borderRadius } }) => ({
          width: "48px",
          height: "48px",
          borderRadius: borderRadius.lg,
        })}
      />
      <VuiTypography variant="button" fontWeight="medium" color="white">
        {name}
      </VuiTypography>
    </VuiBox>
  );
}

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductCell;
