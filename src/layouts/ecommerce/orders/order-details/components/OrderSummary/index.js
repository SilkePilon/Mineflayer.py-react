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

function OrderSummary() {
  return (
    <>
      <VuiBox mb={2}>
        <VuiTypography variant="h6" color="white" fontWeight="medium">
          Order Summary
        </VuiTypography>
      </VuiBox>
      <VuiBox display="flex" justifyContent="space-between" mb="20px">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Product Price:
        </VuiTypography>
        <VuiBox>
          <VuiTypography variant="body2" color="white" fontWeight="medium">
            $90
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox display="flex" justifyContent="space-between" mb="20px">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Delivery:
        </VuiTypography>
        <VuiBox>
          <VuiTypography variant="body2" color="white" fontWeight="medium">
            $14
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox display="flex" justifyContent="space-between" mb="20px">
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Taxes:
        </VuiTypography>
        <VuiBox>
          <VuiTypography variant="body2" color="white" fontWeight="medium">
            $1.95
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox display="flex" justifyContent="space-between" mt={3}>
        <VuiTypography variant="body1" fontWeight="light" color="text">
          Total:
        </VuiTypography>
        <VuiBox>
          <VuiTypography variant="body1" color="white" fontWeight="medium">
            $1.95
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </>
  );
}

export default OrderSummary;
