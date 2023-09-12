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
import Icon from "@mui/material/Icon";

// Theme colors
import colors from "assets/theme/base/colors";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import TimelineItem from "examples/Timeline/TimelineItem";

// Icons
import { AiFillCheckCircle, AiFillHtml5 } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingCart, FaDropbox, FaUser } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { SiAdobexd } from "react-icons/si";

function OrdersOverview() {
  const { success, primary, info, error, lightblue, warning } = colors;

  return (
    <Card>
      <VuiBox>
        <VuiTypography variant="lg" fontWeight="bold" color="white">
          Orders overview
        </VuiTypography>
        <VuiBox mt="4px">
          <VuiTypography variant="button" color="text" fontWeight="regular">
            <VuiTypography display="inline" variant="body2" verticalAlign="middle">
              <AiFillCheckCircle size="15px" color={success.main} />
            </VuiTypography>
            &nbsp;
            <VuiTypography variant="button" color="text" fontWeight="medium">
              +30%
            </VuiTypography>{" "}
            this month
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox mt="32px">
        <TimelineItem
          color="success"
          icon={<IoMdNotifications color={info.main} size="20px" />}
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="error"
          icon={<AiFillHtml5 color={error.main} size="20px" />}
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="info"
          icon={<FaShoppingCart color={lightblue.main} size="20px" />}
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="warning"
          icon={<MdPayment color={warning.main} size="20px" />}
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="primary"
          icon={<FaDropbox color={primary.main} size="20px" />}
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="error"
          icon={<SiAdobexd color={error.main} size="20px" />}
          title="New order #9851258"
          dateTime="18 DEC 4:41 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
        <TimelineItem
          color="error"
          icon={<FaUser color={warning.main} size="20px" />}
          title="Server payments for April"
          dateTime="16 DEC 9:34 PM"
          isWidgets // takes the styles if TimelineItem is in widgets page
        />
      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;
