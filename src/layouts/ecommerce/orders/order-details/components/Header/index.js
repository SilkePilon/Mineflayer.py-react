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

// Vision UI Dashboard PRO React components
// import VuiBox from "components/VuiBox";

// @mui components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function Header() {
  return (
    <VuiBox
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={({ breakpoints }) => ({
        flexDirection: "column",
        alignItems: "start",
        [breakpoints.up("md")]: {
          flexDirection: "row",
          alignItems: "center",
        },
      })}
    >
      <VuiBox
        sx={({ breakpoints }) => ({
          mb: "20px",
          [breakpoints.up("md")]: {
            mb: "0px",
          },
        })}
      >
        <VuiBox mb={1}>
          <VuiTypography variant="h4" fontWeight="bold" color="white">
            Order Details
          </VuiTypography>
        </VuiBox>
        <VuiTypography
          component="p"
          variant="button"
          fontWeight="regular"
          color="text"
          display="flex"
        >
          Order no.
          <VuiTypography
            mx="5px"
            component="p"
            variant="button"
            fontWeight="regular"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            241342
          </VuiTypography>{" "}
          from
          <VuiTypography
            ml="5px"
            component="p"
            variant="button"
            fontWeight="regular"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            23.02.2021
          </VuiTypography>{" "}
        </VuiTypography>
        <VuiTypography
          component="p"
          variant="button"
          fontWeight="regular"
          color="text"
          sx={{ display: "flex" }}
        >
          Code:{" "}
          <VuiTypography
            ml="5px"
            component="p"
            variant="button"
            fontWeight="regular"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            {" "}
            KF332
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiButton
        variant="outline"
        color="white"
        width="100px"
        sx={({ palette: { white } }) => ({
          border: `1px solid ${white.main}`,
          color: white.main,
        })}
      >
        invoice
      </VuiButton>
    </VuiBox>
  );
}

export default Header;
