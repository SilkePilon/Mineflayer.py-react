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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiEditor from "components/VuiEditor";
import VuiSelect from "components/VuiSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function ProductInfo() {
  const [editorValue, setEditorValue] = useState(
    "<p>Some initial <strong>bold</strong> text</p><br><br><br>"
  );

  return (
    <VuiBox>
      <VuiTypography variant="h5" color="white">
        Product Information
      </VuiTypography>
      <VuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="name" placeholder="eg. Off-White" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="weight" placeholder="eg. 42" />
          </Grid>
        </Grid>
      </VuiBox>
      <VuiBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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
                Size
              </VuiTypography>
            </VuiBox>
            <VuiSelect
              defaultValue={{ value: "medium", label: "Medium" }}
              options={[
                { value: "extra large", label: "Extra Large" },
                { value: "extra small", label: "Extra Small" },
                { value: "large", label: "Large" },
                { value: "medium", label: "Medium" },
                { value: "small", label: "Small" },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default ProductInfo;
