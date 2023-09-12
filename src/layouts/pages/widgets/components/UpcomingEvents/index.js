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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DefaultItem from "examples/Items/DefaultItem";

// icons
import { IoMdNotifications } from "react-icons/io";
import { IoWallet } from "react-icons/io5";

function UpcomingEvents() {
  return (
    <Card sx={{ height: "100%", pt: "28px" }}>
      <VuiBox display="flex" flexDirection="column" lineHeight={1} mb="24px">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Upcoming events
        </VuiTypography>
        <VuiTypography variant="button" color="text" fontWeight="regular">
          Joined
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <DefaultItem
          color="info"
          icon={<IoWallet color="white" size="22px" />}
          title="Cyber Week"
          description="27 March 2020, at 12:30 PM"
        />
        <VuiBox mt={3.5}>
          <DefaultItem
            color="info"
            icon={<IoMdNotifications color="white" size="22px" />}
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default UpcomingEvents;
