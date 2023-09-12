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

// Vision UI Dashboard PRO React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <>
      <VuiTypography variant="h6" fontWeight="medium" color="white" mb="30px">
        Track order
      </VuiTypography>
      <VuiBox mt={2}>
        <TimelineItem color="secondary" title="Order received" dateTime="22 DEC 7:20 PM" />
        <TimelineItem
          color="secondary"
          title="Generate order id #1832412"
          dateTime="22 DEC 7:21 AM"
        />
        <TimelineItem
          color="secondary"
          title="Order transmited to courier"
          dateTime="22 DEC 8:10 AM"
        />
        <TimelineItem color="success" title="Order delivered" dateTime="22 DEC 4:54 PM" />
      </VuiBox>
    </>
  );
}

export default OrdersOverview;
