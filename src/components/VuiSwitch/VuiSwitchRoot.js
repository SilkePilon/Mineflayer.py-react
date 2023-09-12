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
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default styled(Switch)(({ theme, ownerState }) => {
  const { palette, functions, borders } = theme;
  const { color } = ownerState;
  const { white, secondary, grey } = palette;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    // background color value
    const backgroundValue = palette[color] ? palette[color].main : white.main;

    return {
      "&.MuiSwitch-root": {
        "& .MuiSwitch-thumb": {
          backgroundColor: white.main,
        },
        "& .MuiSwitch-track": {
          backgroundColor: `${grey[700]} !important`,
          borderColor: "transparent",
        },
        "& .Mui-checked+.MuiSwitch-track": {
          backgroundColor: `${backgroundValue} !important`,
        },
      },
    };
  };

  return {
    ...containedStyles(),
  };
});
