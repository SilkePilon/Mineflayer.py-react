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
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Vision UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import linearGradient from "assets/theme/functions/linearGradient";
import boxShadow from "assets/theme/functions/boxShadow";

// @emotion/react components
import { keyframes } from "@emotion/react";

export default (selectSize, selectError, selectSuccess) => {
  const { dark, white, text, inputColors, gradients, transparent, grey, info } = colors;
  const { size, fontWeightRegular } = typography;
  const { borderWidth, borderRadius } = borders;
  const { inputBoxShadow, lg } = boxShadows;

  let borderColorValue;
  let borderColorFocused;
  let boxShadowValue;
  let selectSizeValue;

  if (selectError) {
    borderColorValue = inputColors.error;
    borderColorFocused = inputColors.error;
  } else if (selectSuccess) {
    borderColorValue = inputColors.success;
    borderColorFocused = inputColors.success;
  } else {
    borderColorValue = inputColors.borderColor.main;
    borderColorFocused = inputColors.borderColor.focus;
  }

  if (selectError) {
    boxShadowValue = inputBoxShadow.error;
  } else if (selectSuccess) {
    boxShadowValue = inputBoxShadow.success;
  } else {
    boxShadowValue = boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1);
  }

  if (selectSize === "small") {
    selectSizeValue = pxToRem(32);
  } else if (selectSize === "large") {
    selectSizeValue = pxToRem(48);
  } else {
    selectSizeValue = pxToRem(40);
  }

  // animations
  const prespective = keyframes`
    from {
      opacity: 0;
      transform: perspective(999px) rotateX(-10deg) translateZ(0) translate3d(0, 0, 0);
    }
    to {
      opacity: 1;
      transform: perspective(999px) rotateX(0deg) translateZ(0) translate3d(0, 0, 5px);
    }
  `;

  return {
    control: (provided, state) => ({
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "fit-content",
      padding: 0,
      fontSize: size.xs,
      fontWeight: fontWeightRegular,
      backgroundColor: inputColors.backgroundColor,
      backgroundClip: "padding-box",
      border: `0.5px solid ${grey[500]}`,
      appearance: "none",
      borderRadius: borderRadius.lg,
      transition: "box-shadow 150ms ease, border-color 150ms ease",
      cursor: "pointer",
      borderColor: state.isFocused ? borderColorFocused : borderColorValue,
      boxShadow: state.isFocused ? boxShadowValue : "none",
      
    }),

    valueContainer: () => ({
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      width: "100%",
      height: "fit-content",
      padding: `0 ${pxToRem(12)}`,
      color: dark.main,
      
    }),

    placeholder: () => ({
      position: "absolute",
      top: selectSize === "small" ? "52%" : "51%",
      transform: "translateY(-50%)",
      marginLeft: 0,
      marginRight: 0,
      color: text.main,
      opacity: 0.5,
    }),

    singleValue: () => ({
      position: "absolute",
      top: selectSize === "small" ? "52%" : "51%",
      transform: "translateY(-50%)",
      color: text.main,
    }),

    input: () => ({
      color: dark.main,
      position: "relative",
      margin: 0,
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (provided, state) => ({
      display: "flex",
      padding: pxToRem(12),

      "& svg": {
        fill: text.main,
        width: pxToRem(14),
        height: pxToRem(14),
        strokeWidth: 1,
        stroke: text.main,
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
        transition: "transform 250ms ease",
      },
    }),

    menu: (provided) => ({
      ...provided,
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      background: linearGradient(gradients.menu.main, gradients.menu.state, gradients.menu.deg),
      border: `${borderWidth[1]} solid ${grey[700]}`,
      borderRadius: borderRadius.md,
      transformOrigin: "50% 0",
      animation: `${prespective} 250ms ease forwards !important`,
     
      
    }),

    menuList: (provided) => ({
      ...provided,
      padding: 0,
      
    }),

    option: (provided, state) => ({
      ...provided,
      position: "relative",
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(100)} ${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      cursor: state.isDisabled ? "not-allowed" : "pointer",
      opacity: state.isDisabled ? 0.5 : 1,
      userSelect: state.isDisabled ? "none" : "auto",
      transition: "background-color 300ms ease, color 300ms ease",
     
      

      "&:after": {
        content: "'Press to select'",
        display: "block",
        fontSize: size.xs,
        position: "absolute",
        right: pxToRem(10),
        top: "52%",
        color: text.main,
        opacity: 0,
        transform: "translateY(-50%)",
        transition: "opacity 300ms ease",
      },

      "&:hover, &:focus, &:target, &:focus-within, ": {
        backgroundColor: transparent.main,
        color: state.isDisabled ? dark.main : white.main,

        "&:after": {
          content: state.isDisabled && "''",
          opacity: 0.5,
        },
      },
    }),

    multiValue: (provided) => ({
      ...provided,
      margin: 0,
      marginRight: pxToRem(4),
      borderRadius: borderRadius.section,
      display: "flex",
      alignItems: "center",
      backgroundColor: info.main,
      color: white.main,
      margin: `${pxToRem(4.8)} ${pxToRem(4.8)} ${pxToRem(4.8)} 0`,
      padding: `${pxToRem(2)} 0 ${pxToRem(2)} ${pxToRem(4)}`,
      
      

      "& div:first-of-type": {
        color: white.main,
        paddingTop: pxToRem(4),
        paddingBottom: pxToRem(2),
      },

      "& div:last-of-type": {
        paddingTop: pxToRem(1.5),
        opacity: 0.8,

        "&:hover": {
          backgroundColor: transparent.main,
          color: white.main,
        },
      },
    }),
  };
};
