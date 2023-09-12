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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";

// Vision UI Dashboard PRO icons
import Mastercard from "examples/Icons/Mastercard";

// React icons
import { MdOutlineInfo } from "react-icons/md";
import MasterCard from "examples/Cards/MasterCard";

function PaymentDetails() {
  const { borderWidth, borderColor } = borders;

  return (
    <>
      <VuiTypography variant="subtitle2" fontWeight="bold" color="white">
        Payment details
      </VuiTypography>
      <VuiBox
        border={`${borderWidth[1]} solid ${borderColor}`}
        borderRadius="xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="20px"
        mt={2}
        maxWidth="261px"
        sx={({ palette: { gradients }, functions: { linearGradient } }) => ({
          background: linearGradient(gradients.box.main, gradients.box.state, gradients.box.deg),
        })}
      >
        <Mastercard alt="master card" width="10%" mr={2} />
        <VuiTypography variant="button" fontWeight="medium" color="white" textAlign="center">
          7812 2139 0823 XXXX
        </VuiTypography>
        <VuiBox lineHeight={0}>
          <Tooltip title="We do not store card details" placement="bottom">
            <MdOutlineInfo size="22px" color="white" />
          </Tooltip>
        </VuiBox>
      </VuiBox>
    </>
  );
}

export default PaymentDetails;
