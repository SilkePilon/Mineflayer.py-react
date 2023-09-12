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
import VuiProgress from "components/VuiProgress";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function Reviews() {
  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox mb="24px">
        <VuiTypography variant="lg" fontWeight="bold" color="white">
          Reviews
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <VuiBox component="li" w="100%" py={1} mb={{sm: "14px", xl: "28px"}}>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="10px">
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                positive reviews
              </VuiTypography>
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                80%
              </VuiTypography>
            </VuiBox>
            <VuiProgress color="info" value={80} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
          <VuiBox component="li" w="100%" py={1} mb={{sm: "14px", xl: "28px"}}>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="10px">
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                neutral reviews
              </VuiTypography>
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                17%
              </VuiTypography>
            </VuiBox>
            <VuiProgress color="white" value={17} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
          <VuiBox component="li" w="100%" py={1} mb={{sm: "14px", xl: "28px"}}>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="10px">
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                negative reviews
              </VuiTypography>
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                3%
              </VuiTypography>
            </VuiBox>
            <VuiProgress color="error" value={3} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox
        display="flex"
        flexDirection={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        mt="auto"
      >
        <VuiBox width={{ xs: "100%", sm: "100%", md: "100%", lg: "60%" }} lineHeight={1}>
          <VuiTypography variant="button" fontSize={{md: 12, lg: 14}} color="text" fontWeight="regular">
            More than <strong>1,500,000 </strong> developers used Creative Tim&apos;s products and
            over <strong>700,000 </strong>
            projects were created.
          </VuiTypography>
        </VuiBox>
        <VuiBox
          width={{ xs: "100%", sm: "100%", md: "100%", lg: "40%" }}
          textAlign="right"
          mt={{ xs: 2, sm: "auto", md: 2, lg: "auto" }}
        >
          <VuiButton color="info" variant="contained">
            view all reviews
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Reviews;
