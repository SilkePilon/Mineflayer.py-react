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
import { styled } from "@mui/material/styles";

export default styled("div")(({ theme }) => {
  const { palette, borders, typography } = theme;

  const { borderRadius, borderWidth } = borders;
  const { size } = typography;
  const { text, borderCol, white, inputColors } = palette;

  return {
    "& .ql-toolbar": {
      borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
      border: `${borderWidth[1]} solid ${borderCol.main}`,
      background: inputColors.backgroundColor,
      "& span": {
        color: `${white.main} !important`,
      },
      "& path": {
        fill: `${white.main} !important`,
        stroke: `${white.main} !important`,
      },
      "& polygon": {
        fill: `${white.main} !important`,
        stroke: `${white.main} !important`,
      },
      "& line": {
        fill: `${white.main} !important`,
        stroke: `${white.main} !important`,
      },

      "& .ql-bold": {
        "& path": {
          fill: "unset !important",
          stroke: `${white.main} !important`,
        },
      },
      "& .ql-underline": {
        "& path": {
          fill: "unset !important",
          stroke: `${white.main} !important`,
        },
      },
      "& .ql-link": {
        "& path": {
          fill: "unset !important",
          stroke: `${white.main} !important`,
        },
      },
    },

    "& .ql-container": {
      background: inputColors.backgroundColor,
      border: `${borderWidth[1]} solid ${borderCol.main}`,
      borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
    },

    "& .ql-editor": {
      "& p": {
        fontSize: size.md,
        color: white.main,
      },

      "& ul li": {
        color: text.main,
        color: white.main,
      },
    },
  };
});
