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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Vision UI Dashboard PRO images
import orderImage from "assets/images/order-details.png";

// Images
function OrderInfo() {
  return (
    <Grid container spacing={{ xs: 1, lg: 2 }} alignItems="center">
      <Grid item xs={12} md={7}>
        <VuiBox
          display="flex"
          alignItems="center"
          sx={({ breakpoints }) => ({
            flexDirection: "column",
            [breakpoints.up("md")]: {
              flexDirection: "row",
            },
          })}
        >
          <VuiBox mr={2} mb={{ xs: "18px", md: "0px" }}>
            <VuiAvatar variant="rounded" size="xxl" src={orderImage} alt="Gold Glasses" />
          </VuiBox>
          <VuiBox
            lineHeight={1}
            display="flex"
            sx={({ breakpoints }) => ({
              flexDirection: "column",
              alignItems: "center",
              [breakpoints.up("md")]: {
                flexDirection: "column",
                alignItems: "start",
              },
            })}
          >
            <VuiTypography variant="lg" fontWeight="medium" color="white">
              Modern Luxury Sofa
            </VuiTypography>
            <VuiBox mt={{ xs: "6px", md: "0px" }} mb={2}>
              <VuiTypography variant="button" fontWeight="regular" color="text">
                Order was delivered 2 days ago.
              </VuiTypography>
            </VuiBox>
            <VuiBadge
              variant="contained"
              color="success"
              size="md"
              badgeContent="delivered"
              container
            />
          </VuiBox>
        </VuiBox>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={({ breakpoints }) => ({
          mt: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          [breakpoints.up("md")]: {
            mt: "0px",
            alignItems: "end",
          },
        })}
      >
        <VuiButton variant="contained" color="info">
          contact us
        </VuiButton>
        <VuiBox mt={0.5}>
          <VuiTypography variant="caption" fontWeight="regular" color="text">
            Do you like the product? Leave us a review{" "}
            <VuiTypography
              component="a"
              href="#"
              variant="button"
              fontWeight="regular"
              color="text"
            >
              here
            </VuiTypography>
            .
          </VuiTypography>
        </VuiBox>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
