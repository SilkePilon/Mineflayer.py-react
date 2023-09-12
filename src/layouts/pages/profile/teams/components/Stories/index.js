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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";

// Vision UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

import { AiOutlinePlus } from "react-icons/ai";
// Vision UI Dashboard PRO React data variables
import storiesData from "layouts/pages/profile/teams/components/Stories/data/storiesData";

function Stories() {
  const { borderWidth } = borders;

  const renderStories = storiesData.map(({ image, name, color }) => (
    <Grid key={name} item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
      <VuiBox
        borderRadius="50%"
        width="3.625rem"
        height="3.625rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        mx="auto"
        border={`${borderWidth[1]} solid ${colors[color].main}`}
        sx={{ cursor: "pointer" }}
      >
        <VuiAvatar src={image} alt={name} />
      </VuiBox>
      <VuiBox mt={0.75} textAlign="center" lineHeight={1}>
        <VuiTypography fontSize={12} color="text" fontWeight="regular">
          {name}
        </VuiTypography>
      </VuiBox>
    </Grid>
  ));

  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.down("lg")]: {
          overflowX: "scroll",
        },
      })}
    >
      <VuiBox width="100%">
        <Grid container justifyContent="space-between" wrap="nowrap">
          <Grid item xs={4} sm={3} md={2} lg={1} sx={{ flex: "0 0 100%" }}>
            <VuiBox
              bgColor="info"
              borderRadius="50%"
              width="3.625rem"
              height="3.625rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mx="auto"
              sx={{ cursor: "pointer" }}
            >
              <AiOutlinePlus color="white" size="24px" />
            </VuiBox>
            <VuiBox mt={0.75} textAlign="center" lineHeight={1}>
              <VuiTypography fontSize={12} color="text" fontWeight="regular">
                Add story
              </VuiTypography>
            </VuiBox>
          </Grid>
          {renderStories}
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default Stories;
