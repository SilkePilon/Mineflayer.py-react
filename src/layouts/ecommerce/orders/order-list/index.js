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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/ecommerce/orders/order-list/data/dataTableData";

function OrderList() {
  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={closeMenu}>Status: Paid</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Refunded</MenuItem>
      <MenuItem onClick={closeMenu}>Status: Canceled</MenuItem>
      <Divider sx={{ margin: "0.5rem 0" }} />
      <MenuItem onClick={closeMenu}>
        <VuiTypography variant="button" color="error" fontWeight="regular">
          Remove Filter
        </VuiTypography>
      </MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox my={3}>
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
          sx={({ breakpoints }) => ({
            flexDirection: "column",
            [breakpoints.up("md")]: {
              flexDirection: "row",
            },
          })}
        >
          <VuiButton
            color="info"
            sx={({ breakpoints }) => ({
              mb: "10px",
              [breakpoints.up("md")]: {
                mb: "0px",
              },
            })}
          >
            new order
          </VuiButton>
          <VuiBox display="flex">
            <VuiButton
              variant={menu ? "contained" : "outlined"}
              color="white"
              onClick={openMenu}
              sx={({ palette: { white }, borders: { borderWidth } }) => ({
                background: "transparent !important",
                border: `${borderWidth[1]} solid ${white.main} !important`,
              })}
            >
              filters&nbsp;
              <Icon>keyboard_arrow_down</Icon>
            </VuiButton>
            {renderMenu}
            <VuiBox ml={1}>
              <VuiButton variant="outlined" color="white">
                <Icon>description</Icon>
                &nbsp;export csv
              </VuiButton>
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <Card>
          <DataTable table={dataTableData} entriesPerPage={false} canSearch />
        </Card>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderList;
