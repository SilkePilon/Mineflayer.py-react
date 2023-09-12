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
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React icons
import SpaceShip from "examples/Icons/SpaceShip";
import Document from "examples/Icons/Document";
import Cube from "examples/Icons/Cube";
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Settings from "examples/Icons/Settings";
import CreditCard from "examples/Icons/CreditCard";

function Sidenav() {
  const sidenavItems = [
    { icon: <SpaceShip color="white" />, label: "profile", href: "profile" },
    { icon: <Document color="white" />, label: "basic info", href: "basic-info" },
    { icon: <Cube color="white" />, label: "change password", href: "change-password" },
    { icon: <Shop color="white" />, label: "2FA", href: "2fa" },
    { icon: <Office color="white" />, label: "accounts", href: "accounts" },
    { icon: <CustomerSupport color="white" />, label: "notifications", href: "notifications" },
    { icon: <Settings color="white" />, label: "sessions", href: "sessions" },
    { icon: <CreditCard color="white" />, label: "delete account", href: "delete-account" },
  ];

  const renderSidenavItems = sidenavItems.map(({ icon, label, href }, key) => {
    const itemKey = `item-${key}`;

    return (
      <VuiBox key={itemKey} component="li" pt={key === 0 ? 0 : 1}>
        <VuiTypography
          component="a"
          href={`#${href}`}
          variant="button"
          fontWeight="regular"
          color="white"
          textTransform="capitalize"
          sx={({
            borders: { borderRadius },
            functions: { pxToRem },
            palette: { light, grey },
            transitions,
          }) => ({
            display: "flex",
            alignItems: "center",
            borderRadius: borderRadius.md,
            padding: `${pxToRem(10)} ${pxToRem(16)}`,
            transition: transitions.create("background-color", {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.shorter,
            }),

            "&:hover": {
              backgroundColor: grey[700],
            },
          })}
        >
          <VuiBox mr={1.5} lineHeight={1} color="white">
            {icon}
          </VuiBox>
          {label}
        </VuiTypography>
      </VuiBox>
    );
  });

  return (
    <Card
      sx={{
        borderRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
        position: "sticky",
        top: "1%",
      }}
    >
      <VuiBox component="ul" display="flex" flexDirection="column" m={0} sx={{ listStyle: "none" }}>
        {renderSidenavItems}
      </VuiBox>
    </Card>
  );
}

export default Sidenav;
