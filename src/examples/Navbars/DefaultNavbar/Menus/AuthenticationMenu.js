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

import { Fragment } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import MenuItem from "@mui/material/MenuItem";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DefaultNavbarCategory from "examples/Navbars/DefaultNavbar/DefaultNavbarCategory";
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

// Vui UI Dashboard PRO theme
import colors from "assets/theme/base/colors";

// Images
import bgCard from "assets/images/background-card-reports.png";

// React icons
import { IoStar } from "react-icons/io5";

function AuthenticationMenu({ routes, open, close, mobileMenu }) {
  const { info } = colors;
  const renderAuthenticationMenuRoute = (routeName) =>
    routes.map(
      ({ key, name, icon, collapse }) =>
        key === routeName && (
          <Fragment key={key}>
            <DefaultNavbarCategory icon={icon} title={name} />
            {collapse.map(({ key: collapseKey, route, name: collapseName }) => (
              <MenuItem
                key={collapseKey}
                component={Link}
                to={route}
                onClick={mobileMenu ? undefined : close}
                sx={{ "&:hover": { background: "transparent" } }}
              >
                <VuiBox color="text" pl={2}>
                  {collapseName}
                </VuiBox>
              </MenuItem>
            ))}
          </Fragment>
        )
    );

  const renderMenuContent = (
    <VuiBox display={mobileMenu ? "block" : "flex"}>
      {!mobileMenu && (
        <VuiBox
          width="10rem"
          minWidth={{ lg: "200px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          borderRadius="lg"
          overflow="hidden"
        >
          <VuiBox
            component="img"
            src={bgCard}
            alt="background-image"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
          />
          <VuiBox
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            opacity={0.2}
            bgColor="info"
            variant="gradient"
          />
          <VuiBox position="relative" textAlign="center">
            <VuiBox
              bgColor="white"
              width="3rem"
              height="3rem"
              borderRadius="50%"
              shadow="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx="auto"
              mb={1}
            >
              <IoStar size="22px" color={info.main} />
            </VuiBox>
            <VuiTypography variant="body1" fontWeight="medium" color="white">
              Explore our utilities pages
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      )}
      <VuiBox py={1} pl={2}>
        {renderAuthenticationMenuRoute("sign-in")}
        {renderAuthenticationMenuRoute("sign-up")}
        {renderAuthenticationMenuRoute("reset-password")}
        {renderAuthenticationMenuRoute("lock")}
        {renderAuthenticationMenuRoute("2-step-verification")}
        {renderAuthenticationMenuRoute("error")}
      </VuiBox>
    </VuiBox>
  );

  return mobileMenu ? (
    renderMenuContent
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderMenuContent}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of AuthenticationMenu
AuthenticationMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the AuthenticationMenu
AuthenticationMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default AuthenticationMenu;
