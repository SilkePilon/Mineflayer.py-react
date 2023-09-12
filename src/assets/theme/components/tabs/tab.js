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
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Vision UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightBold } = typography;
const { borderRadius } = borders;
const { dark, white } = colors;

export default {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "150px",
      minHeight: "35px",
      fontSize: size.xs,
      fontWeight: fontWeightBold,
      textTransform: "none",
      lineHeight: "inherit",
      padding: `${pxToRem(10)} !important`,
      borderRadius: borderRadius.md,
      color: `${white.main} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(4),
      },

      "& svg": {
        marginBottom: "0 !important",
        color: `#fff !important`,
        marginRight: pxToRem(6),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};
