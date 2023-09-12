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
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Project page components
import Header from "layouts/pages/profile/profile-overview/components/Header/index";

// Images
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
import team5 from "assets/images/avatar5.png";

// Icons
import { BsSlack, BsSpotify } from "react-icons/bs";
import { SiAdobexd, SiAtlassian } from "react-icons/si";

function AllProjects() {
  // ComplexProjectCard dropdown menu state
  const [slackBotMenu, setSlackBotMenu] = useState(null);
  const [premiumSupportMenu, setPremiumSupportMenu] = useState(null);
  const [designToolsMenu, setDesignToolsMenu] = useState(null);
  const [lookingGreatMenu, setLookingGreatMenu] = useState(null);
  const [developerFirstMenu, setDeveloperFirstMenu] = useState(null);

  // TeamProfileCard dropdown menu handlers
  const openSlackBotMenu = (event) => setSlackBotMenu(event.currentTarget);
  const closeSlackBotMenu = () => setSlackBotMenu(null);
  const openPremiumSupportMenu = (event) => setPremiumSupportMenu(event.currentTarget);
  const closePremiumSupportMenu = () => setPremiumSupportMenu(null);
  const openDesignToolsMenu = (event) => setDesignToolsMenu(event.currentTarget);
  const closeDesignToolsMenu = () => setDesignToolsMenu(null);
  const openLookingGreatMenu = (event) => setLookingGreatMenu(event.currentTarget);
  const closeLookingGreatMenu = () => setLookingGreatMenu(null);
  const openDeveloperFirstMenu = (event) => setDeveloperFirstMenu(event.currentTarget);
  const closeDeveloperFirstMenu = () => setDeveloperFirstMenu(null);

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
      <Header />
      <VuiBox mt="30px" mb="24px">
        <Grid container>
          <Grid item xs={12}>
            <VuiBox mb={1}>
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Some of Our Awesome Projects
              </VuiTypography>
            </VuiBox>
            <VuiBox mb="40px">
              <VuiTypography fontSize={16} color="text" fontWeight="regular">
                This is the paragraph where you can write more details about your projects. Keep you
                user engaged by providing meaningful information.
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
        <VuiBox mb={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<BsSlack color="white" size="33px" />}
                title="slack bot"
                color="info"
                description="If everything I did failed - which it doesn't, I think that it actually succeeds."
                dateTime="02.03.22"
                members={[team1, team2, team3, team4, team5]}
                dropdown={{
                  action: openSlackBotMenu,
                  menu: renderMenu(slackBotMenu, closeSlackBotMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<BsSpotify color="white" size="33px" />}
                title="premium support"
                color="info"
                description="Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you."
                dateTime="22.11.21"
                members={[team1, team2, team3]}
                dropdown={{
                  action: openPremiumSupportMenu,
                  menu: renderMenu(premiumSupportMenu, closePremiumSupportMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<SiAdobexd color="white" size="33px" />}
                title="design tools"
                color="info"
                description="Constantly growing. We’re constantly making mistakes from which we learn and improve."
                dateTime="06.03.20"
                members={[team1, team2, team3, team4]}
                dropdown={{
                  action: openDesignToolsMenu,
                  menu: renderMenu(designToolsMenu, closeDesignToolsMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<BsSlack color="white" size="33px" />}
                title="looking great"
                color="info"
                description="You have the opportunity to play this game of life you need to appreciate every moment."
                dateTime="14.03.24"
                members={[team1, team2, team3, team4, team5, team3]}
                dropdown={{
                  action: openLookingGreatMenu,
                  menu: renderMenu(lookingGreatMenu, closeLookingGreatMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<BsSlack color="white" size="33px" />}
                title="developer first"
                color="info"
                description="For standing out. But the time is now to be okay to be the greatest you."
                dateTime="16.01.22"
                members={[team1, team2, team3, team4]}
                dropdown={{
                  action: openDeveloperFirstMenu,
                  menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<SiAtlassian color="white" size="33px" />}
                title="web development"
                color="info"
                description="Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you."
                dateTime="06.03.22"
                members={[team1, team2, team3, team4]}
                dropdown={{
                  action: openDeveloperFirstMenu,
                  menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<BsSpotify color="white" size="33px" />}
                title="spotify account"
                color="info"
                description="You have the opportunity to play this game of life you need to appreciate every moment."
                dateTime="14.03.22"
                members={[team1, team2, team3, team4, team2, team1]}
                dropdown={{
                  action: openDeveloperFirstMenu,
                  menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ComplexProjectCard
                icon={<SiAtlassian color="white" size="33px" />}
                title="small account"
                color="info"
                description="For standing out. But the time is now to be okay to be the greatest you."
                dateTime="14.03.22"
                members={[team1, team2, team3, team4]}
                dropdown={{
                  action: openDeveloperFirstMenu,
                  menu: renderMenu(developerFirstMenu, closeDeveloperFirstMenu),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <PlaceholderCard title={{ variant: "h5", text: "New project" }} />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AllProjects;
