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
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiButton from "components/VuiButton";
import { useState } from 'react';
// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import avatar from "assets/images/SimmmpleAvatar.png";

function About() {
  const [username, setUsername] = useState('');

  const getImageUrl = (username) => {
    return `https://minotar.net/avatar/${username}/600.png`
  }
  return (
    <VuiBox>
      <VuiBox width="80%" textAlign="center" mx="auto" mb={4}>
        <VuiBox mb={1}>
          <VuiTypography variant="h5" fontWeight="regular" color="white">
            Let&apos;s start with the basic information
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="body2" fontWeight="regular" color="text">
          Let us know your Minecraft name and email address.
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} container justifyContent="center">
            <VuiBox position="relative" height="max-content" mx="auto">
              <VuiAvatar
                // src="https://minecraftfaces.com/wp-content/bigfaces/big-steve-face.png"
                src={getImageUrl(username)} 
                alt="profile picture"
                sx={{ width: "170px", height: "170px" }}
                variant="rounded"
              />
              
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <VuiBox mb={2}>
              <FormField type="text" label="Minecraft Username" placeholder="Eg. Notch" value={username} onChange={(e) => setUsername(e.target.value)} />
            </VuiBox>
            <VuiBox>
              <FormField type="text" label="Minecraft Email Address" placeholder="Eg. example@gmail.com" />
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default About;
