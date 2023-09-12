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
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme }) => {
  const { palette, typography, borders, functions } = theme;

  const { text, white, dark, inputColors } = palette;
  const { size } = typography;
  const { borderRadius, borderWidth } = borders;
  const { rgba } = functions;

  return {
    display: "flex",
    alignItems: "center",
    border: `${borderWidth[1]} dashed ${inputColors.borderColor.main} !important`,
    borderRadius: borderRadius.md,
    background: inputColors.backgroundColor,

    "& .dz-default": {
      margin: "0 auto !important",
    },

    "& .dz-default .dz-button": {
      color: `${white.main} !important`,
      fontSize: `${size.sm} !important`,
    },

    "& .dz-preview .dz-details": {
      color: `${dark.main} !important`,
      opacity: "1 !important",

      "& .dz-size span, & .dz-filename span": {
        backgroundColor: `${rgba(white.main, 0.7)} !important`,
      },
    },

    "& .dz-error-message": {
      display: "none !important",
    },

    "& .dz-remove": {
      color: `${dark.main} !important`,
      textDecoration: "none",

      "&:hover, &:focus": {
        textDecoration: "none !important",
      },
    },
  };
});