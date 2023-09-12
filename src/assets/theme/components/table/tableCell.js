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

// Vision UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Vision UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { grey, transparent } = colors;

export default {
  styleOverrides: {
    root: {
      backgroundColor: `${transparent.main} !important`,
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      "& .MuiBox-root": {
        pl: "0px !important",
      },
      borderBottom: `${borderWidth[1]} solid ${grey[600]}`,
    },
  },
};
