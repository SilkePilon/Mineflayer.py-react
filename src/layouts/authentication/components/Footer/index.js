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
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer({ full }) {
  return (
    <VuiBox
      component="footer"
      py={6}
      sx={({ breakpoints }) => ({
        maxWidth: full ? "100%" : "450px",
        [breakpoints.down("xl")]: {
          maxWidth: full ? "100%" : "400px",
        },
      })}
    >
      <Grid
        container
        justifyContent={{ xs: "center", lg: full ? "space-between" : "center" }}
        sx={({ breakpoints }) => ({
          maxWidth: full ? "100%" : "450px",
          [breakpoints.down("xl")]: {
            maxWidth: full ? "100%" : "400px",
          },
        })}
      >
        <Grid item xs={full ? 12 : 12} lg={full ? 6 : 12} sx={{ textAlign: "center" }}>
          <VuiTypography
            variant="button"
            sx={{ textAlign: "center", fontWeight: "400 !important" }}
            color="white"
          >
            @ 2023, Open Delivery Bot
          </VuiTypography>
        </Grid>
        <Grid item xs={full ? 10 : 10} lg={full ? 6 : 10}>
          <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <VuiBox mr={{ xs: "20px", lg: "46px" }}>
              <VuiTypography component="a" href="#" variant="body2" color="white">
                Marketplace
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={{ xs: "20px", lg: "46px" }}>
              <VuiTypography component="a" href="#" variant="body2" color="white">
                Blog
              </VuiTypography>
            </VuiBox>
            <VuiBox>
              <VuiTypography component="a" href="#" variant="body2" color="white">
                License
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </Grid>
      </Grid>
    </VuiBox>
  );
}

export default Footer;
