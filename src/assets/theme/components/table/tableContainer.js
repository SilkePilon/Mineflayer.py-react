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
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { transparent } = colors;
const { xxl } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      boxShadow: xxl,
      borderRadius: borderRadius.xl,
      "& thead": {
        "& tr": {
          "& th": {
            "&:first-child": {
              paddingLeft: "0px !important",
            },
          },
        },
      },
      "& .MuiTableBody-root": {
        "& tr": {
          "& td": {
            "&:first-child": {
              paddingLeft: "0px !important",
              "& .MuiBox-root": {
                paddingLeft: "0px !important",
              },
            },
          },
        },
      },
    },
  },
};
