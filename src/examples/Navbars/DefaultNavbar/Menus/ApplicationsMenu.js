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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard PRO React example components
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function ApplicationsMenu({ routes, open, close, mobileMenu }) {
  const renderApplicationsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, route, name, icon }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            to={route}
            onClick={mobileMenu ? undefined : close}
            sx={{ "&:hover": { background: "transparent" } }}
          >
            <VuiBox display="flex" alignItems="center" py={0.25}>
              {typeof icon === "string" ? (
                <Icon
                  sx={({ functions: { linearGradient }, palette: { gradients, transparent } }) => ({
                    backgroundImage: `${linearGradient(
                      gradients.info.main,
                      gradients.info.state
                    )} !important`,
                    WebkitBackgroundClip: "text !important",
                    WebkitTextFillColor: `${transparent.main} !important`,
                  })}
                  fontSize="small"
                >
                  {icon}
                </Icon>
              ) : (
                icon
              )}
              <VuiBox color="text" pl={2} lineHeight={0}>
                {name}
              </VuiBox>
            </VuiBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    <VuiBox px={1.5}>{renderApplicationsMenuRoute("applications")}</VuiBox>
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderApplicationsMenuRoute("applications")}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of ApplicationsMenu
ApplicationsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the ApplicationsMenu
ApplicationsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};
export default ApplicationsMenu;
