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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Vision UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";

// Images
import bgPricingPage from "assets/images/pricing-page-background.png";

// palette colors
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
import borders from "assets/theme/base/borders";

function Header({ tabValue, tabHandler }) {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const { borderRadius } = borders;

  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
          label: "buy now",
          color: "dark",
        }}
        transparent
        light
      />
      <VuiBox
        position="relative"
        height={{ xs: "70vh", lg: "55vh", xl: "50vh", xxl: "50vh" }}
        borderRadius="xl"
        overflow="hidden"
        sx={{ background: `url(${bgPricingPage})`, backgroundSize: "cover", overflowX: "hidden" }}
        m={2}
        pt={12}
        pb={20}
      >
        <VuiBox width="105rem" position="absolute" top={0} />
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={5}>
            <VuiBox mb={1}>
              <VuiTypography fontSize={32} color="white" fontWeight="bold">
                See our pricing
              </VuiTypography>
            </VuiBox>
            <VuiBox
              mb={2}
              textAlign="center"
              display="flex"
              justifyContent="center"
              flexDirection="row"
            >
              <VuiTypography
                variant="body2"
                color="white"
                fontWeight="regular"
                sx={{ maxWidth: "340px" }}
              >
                You have Free Unlimited Updates and Premium Support on each package.
              </VuiTypography>
            </VuiBox>
            <Grid container item xs={12} sm={10} md={8} lg={7} sx={{ mx: "auto" }}>
              <VuiBox
                width="100%"
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <AppBar
                  position="static"
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <Tabs
                    value={tabValue}
                    onChange={tabHandler}
                    sx={{
                      maxWidth: "250px",
                      backgroundImage: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: borderRadius.lg,
                    }}
                  >
                    <Tab
                      id="monthly"
                      label={
                        <VuiBox py={0.5}>
                          <VuiTypography fontSize={10} color="white" fontWeight="bold">
                            MONTHLY
                          </VuiTypography>
                        </VuiBox>
                      }
                      sx={{ width: "50%" }}
                    />
                    <Tab
                      id="annual"
                      label={
                        <VuiBox py={0.5}>
                          <VuiTypography fontSize={10} color="white" fontWeight="bold">
                            YEARLY
                          </VuiTypography>
                        </VuiBox>
                      }
                      sx={{ width: "50%" }}
                    />
                  </Tabs>
                </AppBar>
              </VuiBox>
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  tabHandler: PropTypes.func.isRequired,
};

export default Header;
