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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Vision UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";

function BasicLayout({ title, description, image, children }) {
  return (
    <PageLayout>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
          label: "buy now",
        }}
        transparent
        light
      />
      <VuiBox
        display={{ xs: "none", lg: "block" }}
        width={"calc(100% - 2rem)"}
        minHeight="60vh"
        borderRadius="lg"
        mx={2}
        my={2}
        pt={10}
        pb={14}
        sx={{
          backgroundImage: image && `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></VuiBox>
      <VuiBox
        mt={{ xs: 10, lg: -54, xl: -56, xxl: -65 }}
        px={{ xs: 0, lg: 1 }}
        width={{ xs: "100%", lg: "calc(100% - 2rem)" }}
        mx="auto"
      >
        <Grid
          container
          spacing={3}
          mb={{ xs: "30px", lg: "40px", xl: "60px" }}
          justifyContent="center"
          sx={{ textAlign: "center" }}
        >
          <Grid item xs={10} lg={4}>
            <VuiBox mt={6} mb={1}>
              <VuiTypography variant="h1" color="white" fontWeight="bold" mb="20px">
                {title}
              </VuiTypography>
            </VuiBox>
            <VuiBox mb={2} px={{ md: "160px", lg: "0px", xl: "60px", xxl: "140px" }}>
              <VuiTypography variant="body2" color="white" fontWeight="regular">
                {description}
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
        <VuiBox
          display="flex"
          justifyContent="center"
          mx={{ xs: "auto", lg: "auto" }}
          maxWidth={{ xs: "90%", md: "436px" }}
        >
          {children}
        </VuiBox>
      </VuiBox>
      <Footer full />
    </PageLayout>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
