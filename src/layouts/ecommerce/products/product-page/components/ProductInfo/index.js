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
import VuiButton from "components/VuiButton";
import VuiBadge from "components/VuiBadge";
import VuiSelect from "components/VuiSelect";
import VuiInput from "components/VuiInput";

function ProductInfo() {
  const frameOptions = [
    { value: "aluminium", label: "Aluminium" },
    { value: "carbon", label: "Carbon" },
    { value: "steel", label: "Steel" },
    { value: "wood", label: "Wood" },
  ];

  const colorOptions = [
    { value: "black", label: "black" },
    { value: "blue", label: "blue" },
    { value: "gray", label: "gray" },
    { value: "pink", label: "pink" },
    { value: "red", label: "red" },
    { value: "white", label: "white" },
  ];

  return (
    <VuiBox>
      <VuiBox mb={1}>
        <VuiTypography variant="h3" fontWeight="bold" color="white" mb={1}>
          Modern Luxury Sofa
        </VuiTypography>
      </VuiBox>
      <VuiTypography variant="h4" color="text" mb={2}>
        <Icon color="warning">star</Icon>
        <Icon color="warning">star</Icon>
        <Icon color="warning">star</Icon>
        <Icon color="warning">star</Icon>
        <Icon color="warning">star_half</Icon>
      </VuiTypography>
      <VuiBox mt={1}>
        <VuiTypography variant="button" fontWeight="medium" color="text">
          Price
        </VuiTypography>
      </VuiBox>
      <VuiBox mb={1.5}>
        <VuiTypography variant="h4" fontWeight="medium" color="white">
          $2,599.00
        </VuiTypography>
      </VuiBox>
      <VuiBadge variant="contained" size="lg" color="success" badgeContent="in stock" container />
      <VuiBox mt={3} mb={1}>
        <VuiTypography variant="button" fontWeight="bold" color="white">
          Description
        </VuiTypography>
      </VuiBox>
      <VuiBox component="ul" m={0} pl={2.5} mb={9}>
        <VuiBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <VuiTypography variant="h6" color="text" verticalAlign="middle">
            The most beautiful curves of this swivel stool adds an elegant touch to any environment
          </VuiTypography>
        </VuiBox>
        <VuiBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <VuiTypography variant="h6" color="text" verticalAlign="middle">
            Memory swivel seat returns to original seat position
          </VuiTypography>
        </VuiBox>
        <VuiBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <VuiTypography variant="h6" color="text" verticalAlign="middle">
            Comfortable integrated layered chair seat cushion design
          </VuiTypography>
        </VuiBox>
        <VuiBox component="li" color="text" fontSize="1.25rem" lineHeight={1}>
          <VuiTypography variant="h6" color="text" verticalAlign="middle">
            Fully assembled! No assembly required
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
                Frame Material
              </VuiTypography>
            </VuiBox>
            <VuiSelect defaultValue={frameOptions[3]} options={frameOptions} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
                Color
              </VuiTypography>
            </VuiBox>
            <VuiSelect defaultValue={colorOptions[5]} options={colorOptions} />
          </Grid>
          <Grid item xs={12} lg={2}>
            <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
                Quantity
              </VuiTypography>
            </VuiBox>
            <VuiInput
              inputProps={{ type: "number" }}
              defaultValue={1}
              sx={({ borders: { borderWidth }, palette: { inputColors } }) => ({
                border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
              })}
            />
          </Grid>
        </Grid>
      </VuiBox>
      <VuiBox mt={3}>
        <Grid item xs={12} lg={5} container>
          <VuiButton variant="contained" color="info" sx={{ py: "18px" }} fullWidth>
            add to cart
          </VuiButton>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default ProductInfo;
