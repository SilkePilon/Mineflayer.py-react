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
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Images
import bgMusic from "assets/images/music-background.png";

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={{
        backgroundImage: `url(${bgMusic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <VuiBox pb={3} position="relative" lineHeight={0} display="flex" flexDirection="column">
        <VuiTypography variant="lg" fontSize={{ lg: 16, xl: 18 }} color="white" fontWeight="bold">
          Some Kind Of Blues
        </VuiTypography>
        <VuiTypography variant="button" color="white" fontWeight="regular">
          Deftones
        </VuiTypography>
        <VuiBox display="flex" mt={3} pt={1}>
          <VuiBox display="flex" alignItems="center" justifyContent="center">
            <VuiButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_previous</Icon>
            </VuiButton>
            <VuiButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>play_arrow</Icon>
            </VuiButton>
            <VuiButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              sx={mediaPlayerButtonStyles}
            >
              <Icon>skip_next</Icon>
            </VuiButton>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default MediaPlayer;
