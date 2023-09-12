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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiDropzone from "components/VuiDropzone";

function Media() {
  return (
    <VuiBox>
      <VuiTypography variant="h5" color="white">
        Media
      </VuiTypography>
      <VuiBox mt={3}>
        <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
            Product Image
          </VuiTypography>
        </VuiBox>
        <VuiDropzone options={{ addRemoveLinks: true }} />
      </VuiBox>
    </VuiBox>
  );
}

export default Media;
