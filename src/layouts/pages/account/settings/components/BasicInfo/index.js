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

// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSelect from "components/VuiSelect";
import VuiTagInput from "components/VuiTagInput";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";

// Data
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";

function BasicInfo() {
  const [skills, setSkills] = useState(["react", "angular"]);

  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <VuiBox mb="40px">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Basic Info
        </VuiTypography>
      </VuiBox>
      <VuiBox component="form">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField label="first name" placeholder="Michael" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="last name" placeholder="Jackson" />
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
                      I&apos;m
                    </VuiTypography>
                  </VuiBox>
                  <VuiSelect placeholder="Male" options={selectData.gender} />
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
                          birth date
                        </VuiTypography>
                      </VuiBox>
                      <VuiSelect placeholder="February" options={selectData.birthDate} />
                    </VuiBox>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <VuiBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <VuiSelect placeholder={1} options={selectData.days} />
                    </VuiBox>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <VuiBox
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      height="100%"
                    >
                      <VuiSelect placeholder={2021} options={selectData.years} />
                    </VuiBox>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="confirmation email"
              placeholder="example@email.com"
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField label="your location" placeholder="Sydney, A" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label="phone number"
              placeholder="+40 735 631 620"
              inputProps={{ type: "number" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="language" placeholder="English" />
          </Grid>
          <Grid item xs={12} md={6}>
            <VuiBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <VuiTagInput
                tags={skills}
                placeholder=" "
                onChange={(newSkill) => setSkills(newSkill)}
                removeOnBackspace
              />
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default BasicInfo;
