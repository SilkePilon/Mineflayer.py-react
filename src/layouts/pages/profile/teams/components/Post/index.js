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
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
// Images
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team4 from "assets/images/avatar4.png";
import team5 from "assets/images/avatar5.png";
import bruceMars from "assets/images/avatar7.png";
import team6 from "assets/images/avatar8.png";
import workSpace from "assets/images/teams-image.png";
import VuiAvatar from "components/VuiAvatar";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";
import { useState } from "react";

function Post() {
  const [comments] = useState([
    {
      image: bruceMars,
      name: "michael lewis",
      text: "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves!",
      like: 3,
      share: 2,
    },
    {
      image: team6,
      name: "jessica stones",
      text: "Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy.",
      like: 10,
      share: 1,
    },
  ]);

  const renderComments = comments.map(({ image, name, text, like, share }, key) => (
    <VuiBox key={name} display="flex" mt={key === 0 ? 0 : 3}>
      <VuiBox flexShrink={0}>
        <VuiAvatar src={image} alt={name} />
      </VuiBox>
      <VuiBox flexGrow={1} ml={2}>
        <VuiTypography
          variant="button"
          fontWeight="medium"
          color="white"
          textTransform="capitalize"
        >
          {name}
        </VuiTypography>
        <VuiBox mt={1} mb={2} lineHeight={0.75}>
          <VuiTypography variant="button" fontWeight="regular" color="text">
            {text}
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" flexWrap="wrap" alignItems="center">
          <VuiBox display="flex" alignItems="center" mr={1}>
            <VuiTypography component="a" href="#" variant="body2" color="text">
              <Icon>thumb_up</Icon>&nbsp;
            </VuiTypography>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              {like} likes
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" alignItems="center">
            <VuiTypography component="a" href="#" variant="body2" color="text">
              <Icon>share</Icon>&nbsp;
            </VuiTypography>
            <VuiTypography variant="button" fontWeight="regular" color="text">
              {share} shares
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  ));

  return (
    <Card>
      <VuiBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <VuiAvatar src={team4} alt="profile-image" variant="rounded" />
        <VuiBox mx={2} lineHeight={1}>
          <VuiTypography component="a" href="#" variant="button" color="white" fontWeight="regular">
            Esthera Jackson
          </VuiTypography>
          <VuiTypography component="div" variant="button" color="text" fontWeight="regular">
            3 days ago
          </VuiTypography>
        </VuiBox>
        <VuiBox ml={{ xs: 0, sm: "auto" }}>
          <VuiButton
            color="info"
            size="small"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>&nbsp;
            <VuiTypography color="white" fontSize={10} textTransform="capitalise" fontWeight="bold">
              follow
            </VuiTypography>
          </VuiButton>
        </VuiBox>
      </VuiBox>
      <Divider light sx={{ my: "22px" }} />
      <VuiBox>
        <VuiBox mb={3}>
          <VuiTypography fontSize={14} fontWeight="regular" color="text">
            Personal profiles are the perfect way for you to grab their attention and persuade
            recruiters to continue reading your CV because you’re telling them from the off exactly
            why they should hire you.
          </VuiTypography>
        </VuiBox>
        <VuiBox
          component="img"
          src={workSpace}
          backgroundSize="cover"
          borderRadius="12px"
          width="100%"
        />
        <VuiBox mt={3} mb={1} px={1}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <VuiBox display="flex" alignItems="center">
                <VuiBox display="flex" alignItems="center" mr={2}>
                  <VuiTypography component="a" href="#" variant="body2" color="text">
                    <Icon color="info">thumb_up</Icon>&nbsp;
                  </VuiTypography>
                  <VuiTypography variant="button" fontWeight="regular" color="text">
                    150
                  </VuiTypography>
                </VuiBox>
                <VuiBox display="flex" alignItems="center" mr={2}>
                  <VuiTypography component="a" href="#" variant="body2" color="text">
                    <Icon>mode_comment</Icon>&nbsp;
                  </VuiTypography>
                  <VuiTypography variant="button" fontWeight="regular" color="text">
                    36
                  </VuiTypography>
                </VuiBox>
                <VuiBox display="flex" alignItems="center" mr={2}>
                  <VuiTypography component="a" href="#" variant="body2" color="text">
                    <Icon>share</Icon>&nbsp;
                  </VuiTypography>
                  <VuiTypography variant="button" fontWeight="regular" color="text">
                    12
                  </VuiTypography>
                </VuiBox>
              </VuiBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <VuiBox
                display={{ xs: "none", sm: "flex" }}
                justifyContent="flex-end"
                alignItems="center"
                width="100%"
              >
                <VuiAvatar src={team5} alt="person 1" size="xs" />
                <VuiAvatar src={team2} alt="person 2" size="xs" />
                <VuiAvatar src={team1} alt="person 3" size="xs" />
                <VuiBox pl={1}>
                  <VuiTypography variant="caption" color="text" fontWeight="medium">
                    and 30+ more
                  </VuiTypography>
                </VuiBox>
              </VuiBox>
            </Grid>
          </Grid>
          <Divider light />
          {renderComments}
          <VuiBox display="flex" alignItems="center" mt={3}>
            <VuiBox flexShrink={0} mr={2}>
              <VuiAvatar src={team4} alt="profile picture" />
            </VuiBox>
            <VuiBox flexGrow={1}>
              <VuiInput placeholder="Write your comment..." size="large" />
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Post;
