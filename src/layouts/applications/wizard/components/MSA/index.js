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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React icons
import Settings from "examples/Icons/Settings";
import Cube from "examples/Icons/Cube";
import SpaceShip from "examples/Icons/SpaceShip";
import { IoBuild } from "react-icons/io5";
import { IoCube } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";

function Account() {
  const [design, setDesign] = useState(false);
  const [development, setDevelopment] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const handleSetDesign = () => setDesign(!design);
  const handleSetDevelopment = () => setDevelopment(!development);
  const handleSetMarketing = () => setMarketing(!marketing);

  const customButtonStyles = ({
    functions: { pxToRem },
    borders: { borderWidth },
    palette: { transparent, info },
  }) => ({
    width: pxToRem(150),
    height: pxToRem(150),
    borderWidth: borderWidth[2],
    mb: 1,
    ml: 0.5,

    "&.MuiButton-contained, &.MuiButton-contained:hover": {
      boxShadow: "none",
      border: `${borderWidth[2]} solid ${transparent.main}`,
    },

    "&:hover": {
      backgroundColor: `${info.main} !important`,
      border: `${borderWidth[2]} solid ${info.main} !important`,
    },
  });

  return (
    <VuiBox>
      <VuiBox width="80%" textAlign="center" mx="auto" mb={4}>
        <VuiBox mb={1}>
          <VuiTypography variant="lg" fontWeight="bold" color="white">
            What are you doing? (checkboxes)
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Give us more details about you. What do you enjoy doing in your spare time?
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={2}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={2.5}>
            <VuiBox textAlign="center">
              <VuiButton
                color="info"
                variant={design ? "contained" : "outlined"}
                onClick={handleSetDesign}
                sx={customButtonStyles}
              >
                <IoBuild size="54px" color="white" />
              </VuiButton>
              <VuiTypography variant="h6" color="white">
                Design
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <VuiBox textAlign="center">
              <VuiButton
                color="info"
                variant={development ? "contained" : "outlined"}
                onClick={handleSetDevelopment}
                sx={customButtonStyles}
              >
                <IoCube size="54px" color="white" />
              </VuiButton>
              <VuiTypography variant="h6" color="white">
                Development
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <VuiBox textAlign="center">
              <VuiButton
                color="info"
                variant={marketing ? "contained" : "outlined"}
                onClick={handleSetMarketing}
                sx={customButtonStyles}
              >
                <RiPencilFill size="54px" color="white" />
              </VuiButton>
              <VuiTypography variant="h6" color="white">
                Marketing
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default Account;
