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

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color } = ownerState;

  const { white, alertColors, black } = palette;
  const { fontSizeRegular, fontWeightMedium } = typography;
  const { borderWidth, borderRadius } = borders;
  const { pxToRem } = functions;

  // border value
  const borderValue = alertColors[color]
    ? `${borderWidth[1]} solid ${alertColors[color].border}`
    : `${borderWidth[1]} solid ${alertColors.info.border}`;

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    background: palette[color].main,
    color: white.main,
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    border: borderValue,
    borderRadius: borderRadius.lg,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
  };
});
