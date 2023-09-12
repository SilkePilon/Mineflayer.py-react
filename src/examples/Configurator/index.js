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

import { useState, useEffect } from "react";

// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Vision UI Dashboard PRO React context
import {
  useVisionUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";

function Configurator() {
  const [controller, dispatch] = useVisionUIController();
  const { openConfigurator, transparentSidenav, miniSidenav, fixedNavbar, sidenavColor } =
    controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <VuiBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <VuiBox>
          <VuiTypography color="white" variant="h5">
            Vision UI Configurator
          </VuiTypography>
          <VuiTypography variant="body2" color="text">
            See our dashboard options.
          </VuiTypography>
        </VuiBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </VuiBox>

      <Divider />

      <VuiBox pt={1.25} pb={3} px={3}>
        <VuiBox>
          <VuiTypography color="white" variant="h6">
            Sidenav Colors
          </VuiTypography>

          <VuiBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({ borders: { borderWidth }, palette: { white, dark }, transitions }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  border: `${borderWidth[1]} solid ${white.main}`,
                  borderColor: sidenavColor === color && dark.main,
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(gradients[color].main, gradients[color].state),

                  "&:not(:last-child)": {
                    mr: 1,
                  },

                  "&:hover, &:focus, &:active": {
                    borderColor: dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </VuiBox>
        </VuiBox>

        
           {
             window.innerWidth >= 1440
              && 
              <VuiBox mt={3} lineHeight={1}>
          <VuiTypography color="white" variant="h6">
            Sidenav Type
          </VuiTypography>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            Choose between 2 different sidenav types.
          </VuiTypography>
              <VuiBox
              sx={{
                display: "flex",
                mt: 2,
              }}
            >
              <VuiButton
                color="info"
                variant={transparentSidenav ? "contained" : "outlined"}
                onClick={handleTransparentSidenav}
                disabled={disabled}
                fullWidth
                sx={{
                  mr: 1,
                  ...sidenavTypeButtonsStyles,
                }}
              >
                Transparent
              </VuiButton>
              <VuiButton
                color="info"
                variant={transparentSidenav ? "outlined" : "contained"}
                onClick={handleWhiteSidenav}
                disabled={disabled}
                fullWidth
                sx={sidenavTypeButtonsStyles}
              >
                Opaque
              </VuiButton>
            </VuiBox>
            </VuiBox>
           }     
          
        
        <VuiBox mt={3} mb={2} lineHeight={1}>
          <VuiTypography color="white" variant="h6">
            Navbar Fixed
          </VuiTypography>

          <VuiSwitch color="info" checked={fixedNavbar} onChange={handleFixedNavbar} />
        </VuiBox>

        <Divider />

        <VuiBox mt={2} mb={3} lineHeight={1}>
          <VuiTypography color="white" variant="h6">
            Sidenav Mini
          </VuiTypography>

          <VuiSwitch color="info" checked={miniSidenav} onChange={handleMiniSidenav} />
        </VuiBox>

        <Divider />

        <VuiBox mt={3} mb={2}>
          <VuiBox mb={2}>
            <VuiButton
              component={Link}
              href="https://www.creative-tim.com/product/vision-ui-dashboard-pro-react"
              target="_blank"
              rel="noreferrer"
              color="info"
              variant="contained"
              fullWidth
            >
              buy now
            </VuiButton>
          </VuiBox>
          <VuiBox mb={2}>
            <VuiButton
              component={Link}
              href="https://www.creative-tim.com/product/vision-ui-dashboard-react"
              target="_blank"
              rel="noreferrer"
              color="dark"
              variant="gradient"
              fullWidth
            >
              free download
            </VuiButton>
          </VuiBox>
          <VuiButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/vision-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            color="white"
            variant="outlined"
            fullWidth
          >
            view documentation
          </VuiButton>
        </VuiBox>
        <VuiBox display="flex" justifyContent="center">
          <GitHubButton
            href="https://github.com/creativetimofficial/vision-ui-dashboard-pro-react"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/vision-ui-dashboard-pro-react on GitHub"
          >
            Star
          </GitHubButton>
        </VuiBox>
        <VuiBox mt={3} textAlign="center">
          <VuiBox mb={0.5}>
            <VuiTypography variant="h6" color="white">
              Thank you for sharing!
            </VuiTypography>
          </VuiBox>

          <VuiBox display="flex" justifyContent="center">
            <VuiBox mr={1.5}>
              <VuiButton
                component={Link}
                href="https://twitter.com/intent/tweet?url=https://www.creative-tim.com/product/vision-ui-dashboard-pro-react&text=Check%20Vision%20UI%20Dashboard%20PRO%20React%20made%20by%20@simmmple_web%20and%20@CreativeTim%20#webdesign%20#dashboard%20#react"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </VuiButton>
            </VuiBox>
            <VuiButton
              component={Link}
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/vision-ui-dashboard-pro-react"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Share
            </VuiButton>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
