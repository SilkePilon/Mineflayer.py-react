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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSelect from "components/VuiSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/edit-product/components/FormField";

function Pricing() {
  return (
    <Card sx={{ overflow: "visible", zIndex: 9 }}>
      <VuiBox>
        <VuiTypography variant="h5" fontWeight="bold" color="white">
          Pricing
        </VuiTypography>
        <VuiBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <FormField type="number" label="price" defaultValue="99.00" />
            </Grid>
            <Grid item xs={12} md={4}>
              <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <VuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color="white"
                >
                  Currency
                </VuiTypography>
              </VuiBox>
              <VuiSelect
                defaultValue={{ value: "usd", label: "USD" }}
                options={[
                  { value: "btc", label: "BTC" },
                  { value: "cny", label: "CNY" },
                  { value: "eur", label: "EUR" },
                  { value: "gbp", label: "GBP" },
                  { value: "inr", label: "INR" },
                  { value: "use", label: "USD" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <FormField type="text" label="SKU" defaultValue="71283476591" />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
                  Project Tags
                </VuiTypography>
              </VuiBox>
              <VuiSelect
                defaultValue={[
                  { value: "in stock", label: "In Stock" },
                  { value: "out of stock", label: "Out of Stock" },
                ]}
                options={[
                  { value: "black friday", label: "Black Friday" },
                  { value: "expired", label: "Expired", isDisabled: true },
                  { value: "out of stock", label: "Out of Stock" },
                  { value: "in stock", label: "In Stock" },
                  { value: "sale", label: "Sale" },
                ]}
                size="large"
                isMulti
              />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Pricing;
