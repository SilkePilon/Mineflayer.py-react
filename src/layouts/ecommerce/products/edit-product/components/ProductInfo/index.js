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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiEditor from "components/VuiEditor";
import VuiSelect from "components/VuiSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function ProductInfo() {
  const [editorValue, setEditorValue] = useState(
    `<p>
      Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.
    </p>`
  );

  return (
    <Card sx={{ overflow: "visible", zIndex: 10 }}>
      <VuiBox>
        <VuiTypography variant="h5" color="white">
          Product Information
        </VuiTypography>
        <VuiBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormField type="text" label="name" defaultValue="Minimal Bar Stool" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField type="number" label="weight" defaultValue={2} />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <FormField type="text" label="collection" defaultValue="Summer" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField type="text" label="price" defaultValue="$90" />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormField type="number" label="quantity" defaultValue={50} />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
                  Description&nbsp;&nbsp;
                  <VuiTypography variant="caption" fontWeight="regular" color="text">
                    (optional)
                  </VuiTypography>
                </VuiTypography>
              </VuiBox>
              <VuiEditor value={editorValue} onChange={setEditorValue} />
            </Grid>
            <Grid item xs={12} md={6}>
              <VuiBox mb={3}>
                <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <VuiTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                    color="white"
                  >
                    Category
                  </VuiTypography>
                </VuiBox>
                <VuiSelect
                  defaultValue={{ value: "clothing", label: "Clothing" }}
                  options={[
                    { value: "clothing", label: "Clothing" },
                    { value: "electronics", label: "Electronics" },
                    { value: "furniture", label: "Furniture" },
                    { value: "others", label: "Others" },
                    { value: "real estate", label: "Real Estate" },
                  ]}
                />
              </VuiBox>
              <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <VuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color="white"
                >
                  Color
                </VuiTypography>
              </VuiBox>
              <VuiSelect
                defaultValue={{ value: "black", label: "Black" }}
                options={[
                  { value: "black", label: "Black" },
                  { value: "blue", label: "Blue" },
                  { value: "green", label: "Green" },
                  { value: "orange", label: "Orange" },
                  { value: "white", label: "White" },
                ]}
              />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ProductInfo;
