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

const item = {
  width: "100%",
  padding: 0,
  cursor: "pointer",
};

function itemContent(theme, ownerState) {
  const { palette, typography, transitions, functions } = theme;
  const { active, miniSidenav, name, nested, color } = ownerState;

  const { white, gradients, info } = palette;
  const { size, fontWeightMedium, fontWeightRegular } = typography;
  const { pxToRem } = functions;

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: `${pxToRem(7.2)} ${pxToRem(16)}`,
    margin: `0 ${pxToRem(16)} 0 ${pxToRem(21.6)}`,
    userSelect: "none",
    position: "relative",

    "& span": {
      color: active ? white.main : white.main,
      fontWeight: active ? fontWeightMedium : fontWeightRegular,
      fontSize: size.sm,
      opacity: miniSidenav ? 0 : 1,
      transition: transitions.create(["opacity", "color"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "&::before": {
      content: () => {
        if (nested) {
          return nested && miniSidenav && `"${name[0]}"`;
        }

        return miniSidenav ? `"${name[0]}"` : '""';
      },
      width: () => {
        if (!miniSidenav) {
          return active ? pxToRem(8) : pxToRem(5);
        }

        return 0;
      },
      height: () => {
        if (!miniSidenav) {
          return active ? pxToRem(8) : pxToRem(5);
        }

        return 0;
      },
      // backgroundColor: info.main,
      backgroundColor: () => {
        let background;

        if (!color) {
          background = info.main;
        } else if (color === "warning") {
          background = gradients.warning.main;
        } else {
          background = palette[color].main;
        }

        return background;
      },
      color: () => {
        let value;

        if (!color) {
          value = info.main;
        } else if (color === "warning") {
          value = gradients.warning.main;
        } else {
          value = palette[color].main;
        }

        return value;
      },
      fontWeight: active ? fontWeightMedium : fontWeightRegular,
      display: "flex",
      alignItems: "center",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: pxToRem(-18),
      opacity: 1,
      borderRadius: "50%",
      fontSize: size.sm,
    },
  };
}

function itemArrow(theme, ownerState) {
  const { typography, transitions, functions, palette } = theme;
  const { open, miniSidenav } = ownerState;

  const { dark, gradients, white } = palette;
  const { size } = typography;
  const { pxToRem, rgba } = functions;

  return {
    fontSize: `${size.md} !important`,
    fontWeight: 500,
    marginRight: pxToRem(-2.5),
    transform: () => {
      if (open) {
        return miniSidenav ? `translateX(${pxToRem(-24)}) rotate(0)` : "rotate(0)";
      }

      return miniSidenav ? `translateX(${pxToRem(-24)}) rotate(-180deg)` : "rotate(-180deg)";
    },
    color: white.main,
    transition: transitions.create(["color", "transform"], {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.shorter,
    }),
  };
}

export { item, itemContent, itemArrow };
