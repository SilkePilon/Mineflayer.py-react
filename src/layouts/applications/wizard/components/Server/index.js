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
import Card from "@mui/material/Card";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useState } from "react";

// @material-ui core components



// Vision UI Dashboard PRO React components

import VuiSelect from "components/VuiSelect";
import VuiTagInput from "components/VuiTagInput";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/applications/wizard/components/Server/data/selectData";
// Wizard application components

function Address() {
  const [plugins, setPlugins] = useState(["Lava Caster", "Discord"]);
  return (
    <VuiBox>
      <VuiBox width="80%" textAlign="center" mx="auto" mb={4}>
        <VuiBox mb={1}>
          <VuiTypography variant="lg" fontWeight="bold" color="white">
            Server Settings
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Please provide the server and Minecraft version you want to use.
        </VuiTypography>
      </VuiBox>
      {/* <Card id="basic-info" sx={{ overflow: "visible" }}> */}
      
      <VuiBox component="form">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField label="Server Ip" placeholder="2b2t.org" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="Server Port" placeholder="25565" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <VuiBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                >
                  <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <VuiTypography
                      component="label"
                      variant="caption"
                      color="white"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      Start Packet Type
                    </VuiTypography>
                  </VuiBox>
                  <VuiSelect placeholder="Login" options={selectData.packet} />
                </VuiBox>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <VuiBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <VuiTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          color="white"
                          textTransform="capitalize"
                        >
                          Anti-AFK
                        </VuiTypography>
                      </VuiBox>
                      <VuiSelect placeholder="True" options={selectData.afk} />
                    </VuiBox>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <VuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                      <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <VuiTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          color="white"
                          textTransform="capitalize"
                        >
                          Auto Armor / Eat
                        </VuiTypography>
                      </VuiBox>
                      <VuiSelect placeholder="True" options={selectData.armorandeat} />
                    </VuiBox>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <VuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        >
                      <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <VuiTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          color="white"
                          textTransform="capitalize"
                        >
                          Version
                        </VuiTypography>
                      </VuiBox>
                      <VuiSelect placeholder="True" options={selectData.versions} />
                    </VuiBox>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="Discord Webhook (optional)"
              placeholder="https://discordapp.com/api/webhooks/"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="Discord Bot Token (optional)"
              placeholder=""
              inputProps={{ type: "email" }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormField label="language" placeholder="English" />
          </Grid>
          <Grid item xs={12} md={6}>
            <VuiBox
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              height="100%"
            >
            <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <VuiTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                color="white"
                textTransform="capitalize"
              >
                Plugins
              </VuiTypography>
              </VuiBox>
              <VuiTagInput
                tags={plugins}
                placeholder=" "
                onChange={(newPlugin) => setPlugins(newPlugin)}
                removeOnBackspace
              />
            </VuiBox>
          
          </Grid>
        </Grid>
      </VuiBox>
    {/* </Card> */}
    </VuiBox>
  );
}

export default Address;
