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

export default styled("div")(({ theme, ownerState }) => {
  const { palette, boxShadows, functions, typography, borders, transitions } = theme;
  const { size, error, success } = ownerState;

  const { inputColors, grey, white, dark, gradients, info } = palette;
  const { inputBoxShadow } = boxShadows;
  const { pxToRem, boxShadow, rgba } = functions;
  const { size: fontSize, fontWeightRegular } = typography;
  const { borderRadius, borderWidth } = borders;

  // borderColor value
  let borderColorValue = inputColors.borderColor.main;

  if (error) {
    borderColorValue = inputColors.error;
  } else if (success) {
    borderColorValue = inputColors.success;
  }

  // borderColor value when input is focused
  let focusedBorderColorValue = inputColors.borderColor.focus;

  if (error) {
    focusedBorderColorValue = inputColors.error;
  } else if (success) {
    focusedBorderColorValue = inputColors.success;
  }

  // boxShadow value when input is focused
  let focusedBoxShadowValue = boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1);

  if (error) {
    focusedBoxShadowValue = inputBoxShadow.error;
  } else if (success) {
    focusedBoxShadowValue = inputBoxShadow.success;
  }

  return {
    "& .react-tag-input": {
      width: "100%",
      height: "auto",
      padding: `${pxToRem(6)} ${pxToRem(6)}`,
      fontSize: fontSize.sm,
      fontWeight: fontWeightRegular,
      lineHeight: 1.4,
      color: grey[700],
      backgroundColor: inputColors.backgroundColor,
      backgroundClip: "padding-box",
      border: `0.5px solid ${grey[500]}`,
      appearance: "none",
      borderRadius: borderRadius.lg,
      transition: transitions.create(["box-shadow", "border-color"], {
        easing: transitions.easing.ease,
        duration: transitions.duration.shortest,
      }),
      borderColor: borderColorValue,

      "&:focus, &:focus-within": {
        borderColor: focusedBorderColorValue,
        outline: 0,
        boxShadow: focusedBoxShadowValue,
      },

      "& .react-tag-input__input": {
        height: size === "large" ? pxToRem(34) : pxToRem(26),
        color: info.main,

        "&::-webkit-input-placeholder": {
          color: rgba(dark.main, 0.5),
        },
      },

      "& .react-tag-input__tag": {
        display: "flex",
        alignItems: "center",
        backgroundColor: info.main,
        color: white.main,
        borderRadius: borderRadius.section,
        padding:
          size === "large" ? `${pxToRem(5)} 0 ${pxToRem(4.5)}` : `${pxToRem(3)} 0 ${pxToRem(2.5)}`,

        "& .react-tag-input__tag__content": {
          padding: size === "large" ? `0 ${pxToRem(8)} 0 ${pxToRem(12)}` : `0 ${pxToRem(8)}`,
        },

        "& .react-tag-input__tag__remove": {
          backgroundColor: info.main,
          borderRadius: `0 ${borderRadius.section} ${borderRadius.section} 0`,
          borderLeft: `${borderWidth[1]} solid ${rgba(white.main, 0.25)}`,
          height: size === "large" ? pxToRem(20) : pxToRem(16),
          padding: size === "large" ? `${pxToRem(6)} ${pxToRem(12)}` : pxToRem(4),

          "&:before, &:after": {
            backgroundColor: rgba(white.main, 0.8),
            left: "40%",
            width: pxToRem(1),
          },
        },
      },
    },
  };
});
