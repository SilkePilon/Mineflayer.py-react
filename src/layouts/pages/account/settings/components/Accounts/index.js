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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";

// Images
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoAsana from "assets/images/small-logos/logo-asana.svg";
import colors from "assets/theme/base/colors";

function Accounts() {
  const [slack2FA, setSlack2FA] = useState(true);
  const [spotify2FA, setSpotify2FA] = useState(true);
  const [atlassian2FA, setAtlassian2FA] = useState(true);
  const [asana2FA, setAsana2FA] = useState(false);

  const handleSetSlack2FA = () => setSlack2FA(!slack2FA);
  const handleSetSpotify2FA = () => setSpotify2FA(!spotify2FA);
  const handleSetAtlassian2FA = () => setAtlassian2FA(!atlassian2FA);
  const handleSetAsana2FA = () => setAsana2FA(!asana2FA);

  const { inputColors, grey } = colors;

  return (
    <Card id="accounts">
      <VuiBox lineHeight={1} mb="40px">
        <VuiBox mb="4px">
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Accounts
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" color="text" fontWeight="regular">
          Here you can setup and manage your integration settings.
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <VuiBox display="flex" alignItems="center">
            <VuiAvatar src={logoSlack} alt="Slack logo" variant="rounded" />
            <VuiBox ml={2}>
              <VuiTypography variant="h6" color="white" fontWeight="medium">
                Slack
              </VuiTypography>
              <VuiBox display="flex" alignItems="flex-end">
                <VuiTypography variant="button" color="text" fontWeight="regular">
                  Show less
                </VuiTypography>
                <VuiTypography variant="button" color="text" sx={{ lineHeight: 0 }}>
                  <Icon fontSize="small">expand_less</Icon>
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
          <VuiBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <VuiBox lineHeight={0} mx={2}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                {slack2FA ? "Enabled" : "Disabled"}
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={1}>
              <VuiSwitch color="info" checked={slack2FA} onChange={handleSetSlack2FA} />
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <VuiBox ml={2} lineHeight={1} pl={{ sm: 0, md: 6 }} mt="16px">
          <VuiTypography variant="button" color="text" fontWeight="regular">
            You haven&apos;t added your Slack yet or you aren&apos;t authorized. Please add our
            Slack Bot to your account by clicking on here. When you&apos;ve added the bot, send your
            verification code that you have received.
          </VuiTypography>
          <VuiBox
            bgColor={inputColors.backgroundColor}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <VuiTypography variant="button" fontWeight="medium" color="text">
              Verification Code
            </VuiTypography>
            <VuiBox
              width={{ xs: "100%", sm: "25%", md: "15%" }}
              mt={{ xs: 1, sm: 0 }}
              borderColor={grey[600]}
            >
              <Tooltip title="Copy" placement="top">
                <VuiInput size="small" value="1172913" sx={{ borderColor: grey[600] }} />
              </Tooltip>
            </VuiBox>
          </VuiBox>
          <VuiBox
            bgColor={inputColors.backgroundColor}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ sm: "column", md: "row" }}
            my={3}
            py={1}
            pl={{ sm: 1, md: 2 }}
            pr={1}
          >
            <VuiTypography variant="button" fontWeight="medium" color="text">
              Connected account
            </VuiTypography>
            <VuiBox
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ sm: "column", md: "row" }}
            >
              <VuiBox mr={2} mb={{ sm: 1, md: 0 }} lineHeight={0}>
                <VuiTypography variant="button" fontWeight="medium" color="text">
                  hello@vision-ui.com
                </VuiTypography>
              </VuiBox>
              <VuiButton variant="gradient" color="error" size="small">
                delete
              </VuiButton>
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <Divider light />
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <VuiBox display="flex" alignItems="center">
            <VuiAvatar src={logoSpotify} alt="Slack logo" variant="rounded" />
            <VuiBox ml={2} lineHeight={0}>
              <VuiTypography variant="h6" color="white" fontWeight="medium">
                Spotify
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Music
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <VuiBox lineHeight={0} mx={2}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                {spotify2FA ? "Enabled" : "Disabled"}
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={1}>
              <VuiSwitch color="info" checked={spotify2FA} onChange={handleSetSpotify2FA} />
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <Divider light />
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <VuiBox display="flex" alignItems="center">
            <VuiAvatar src={logoAtlassian} alt="Slack logo" variant="rounded" />
            <VuiBox ml={2} lineHeight={0}>
              <VuiTypography variant="h6" color="white" fontWeight="medium">
                Atlassian
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Payment vendor
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <VuiBox lineHeight={0} mx={2}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                {atlassian2FA ? "Enabled" : "Disabled"}
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={1}>
              <VuiSwitch color="info" checked={atlassian2FA} onChange={handleSetAtlassian2FA} />
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <Divider light />
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <VuiBox display="flex" alignItems="center">
            <VuiAvatar src={logoAsana} alt="Slack logo" variant="rounded" />
            <VuiBox ml={2} lineHeight={0}>
              <VuiTypography variant="h6" color="white" fontWeight="medium">
                Asana
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                Organize your team
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <VuiBox lineHeight={0} mx={2}>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                {asana2FA ? "Enabled" : "Disabled"}
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={1}>
              <VuiSwitch color="info" checked={asana2FA} onChange={handleSetAsana2FA} />
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Accounts;
