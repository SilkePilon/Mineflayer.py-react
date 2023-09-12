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

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

function DocsMenu({ routes, open, close, mobileMenu }) {
  const renderDocsMenuRoute = (routeName) =>
    routes.map(
      ({ key, collapse }) =>
        key === routeName &&
        collapse.map(({ key: collapseKey, href, name, icon, description }) => (
          <MenuItem
            key={collapseKey}
            component={Link}
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={mobileMenu ? undefined : close}
            sx={{ "&:hover": { background: "transparent" } }}
          >
            <VuiBox display="flex" py={0.25}>
              {typeof icon === "string" ? <Icon>{icon}</Icon> : <VuiBox mt={0.5}>{icon}</VuiBox>}
              <VuiBox pl={2} lineHeight={0}>
                <VuiTypography variant="h6" fontWeight="bold">
                  {name}
                </VuiTypography>
                <VuiTypography variant="button" fontWeight="regular" color="text">
                  {description}
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </MenuItem>
        ))
    );

  return mobileMenu ? (
    renderDocsMenuRoute("docs")
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderDocsMenuRoute("docs")}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of DocsMenu
DocsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the DocsMenu
DocsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default DocsMenu;
