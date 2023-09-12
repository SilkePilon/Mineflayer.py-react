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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

const VuiBadgeDot = forwardRef(({ variant, color, size, badgeContent, font, ...rest }, ref) => {
  let finalSize;
  let fontSize;
  let padding;

  if (size === "sm") {
    finalSize = "0.5rem";
    fontSize = "caption";
    padding = "0.45em 0.775em";
  } else if (size === "lg") {
    finalSize = "0.625rem";
    fontSize = "body2";
    padding = "0.85em 1.375em";
  } else if (size === "md") {
    finalSize = "0.5rem";
    fontSize = "button";
    padding = "0.65em 1em";
  } else {
    finalSize = "0.375rem";
    fontSize = "caption";
    padding = "0.45em 0.775em";
  }

  const validColors = [
    "primary",
    "secondary",
    "info",
    "success",
    "white",
    "warning",
    "error",
    "light",
    "dark",
  ];

  const validColorIndex = validColors.findIndex((el) => el === color);

  return (
    <VuiBox ref={ref} display="flex" alignItems="center" p={padding} {...rest}>
      <VuiBox
        component="i"
        display="inline-block"
        width={finalSize}
        height={finalSize}
        borderRadius="50%"
        bgColor={validColors[validColorIndex]}
        variant={variant}
        mr={1}
      />
      <VuiTypography
        variant={fontSize}
        fontWeight={font.weight ? font.weight : "regular"}
        color={font.color ? font.color : "white"}
        sx={{ lineHeight: 0 }}
      >
        {badgeContent}
      </VuiTypography>
    </VuiBox>
  );
});

// Setting default values for the props of VuiBadge
VuiBadgeDot.defaultProps = {
  variant: "contained",
  color: "info",
  size: "xs",
  font: {},
};

// Typechecking props of the VuiBadge
VuiBadgeDot.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "white",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  badgeContent: PropTypes.string.isRequired,
  font: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.string,
  }),
};

export default VuiBadgeDot;
