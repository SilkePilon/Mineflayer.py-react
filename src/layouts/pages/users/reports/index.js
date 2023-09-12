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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import Table from "examples/Tables/Table";

import { FaUser, FaThumbsUp } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoCart } from "react-icons/io5";

// Reports page components
import Reviews from "layouts/pages/users/reports/components/Reviews";

// Data
import tableData from "layouts/pages/users/reports/data/tableData";

function Reports() {
  const { columns, rows } = tableData;

  // ComplexStatisticsCard dropdown menu state
  const [usersActiveMenu, setUsersActiveMenu] = useState(null);
  const [clickEventsMenu, setClickEventsMenu] = useState(null);
  const [purchasesMenu, setPurchasesMenu] = useState(null);
  const [likesMenu, setLikesMenu] = useState(null);

  // ComplexStatisticsCard dropdown menu handlers
  const openUsersActiveMenu = (event) => setUsersActiveMenu(event.currentTarget);
  const closeUsersActiveMenu = () => setUsersActiveMenu(null);
  const openClickEventsMenu = (event) => setClickEventsMenu(event.currentTarget);
  const closeClickEventsMenu = () => setClickEventsMenu(null);
  const openPurchasesMenu = (event) => setPurchasesMenu(event.currentTarget);
  const closePurchasesMenu = () => setPurchasesMenu(null);
  const openLikesMenu = (event) => setLikesMenu(event.currentTarget);
  const closeLikesMenu = () => setLikesMenu(null);

  // Dropdown menu template for the ComplexProjectCard
  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>Action</MenuItem>
      <MenuItem onClick={close}>Another action</MenuItem>
      <MenuItem onClick={close}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    icon={<FaUser size="25px" />}
                    count={{ number: 1600, label: "users active" }}
                    percentage="+55%"
                    dropdown={{
                      action: openUsersActiveMenu,
                      menu: renderMenu(usersActiveMenu, closeUsersActiveMenu),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    icon={<IoIosRocket size="25px" />}
                    count={{ number: 357, label: "click events" }}
                    percentage="+124%"
                    dropdown={{
                      action: openClickEventsMenu,
                      menu: renderMenu(clickEventsMenu, closeClickEventsMenu),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    icon={<IoCart size="25px" />}
                    count={{ number: 2300, label: "purchases" }}
                    percentage="+55%"
                    dropdown={{
                      action: openPurchasesMenu,
                      menu: renderMenu(purchasesMenu, closePurchasesMenu),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ComplexStatisticsCard
                    icon={<FaThumbsUp size="25px" />}
                    count={{ number: 940, label: "likes" }}
                    percentage="+90%"
                    dropdown={{
                      action: openLikesMenu,
                      menu: renderMenu(likesMenu, closeLikesMenu),
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Reviews />
            </Grid>
          </Grid>
        </VuiBox>
        <Table columns={columns} rows={rows} />
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
