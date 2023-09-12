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
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/Help";
import { AiFillStar } from "react-icons/ai";

// Vision UI Dashboard PRO React components
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";

// Vision UI Dashboard PRO React context
import { useVisionUIController } from "context";
import colors from "assets/theme/base/colors";

function SidenavCard() {
  const [controller] = useVisionUIController();
  const { miniSidenav, sidenavColor, transparentSidenav } = controller;
  const { info } = colors;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor, transparentSidenav })}>
        <VuiBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <AiFillStar color={info.main} />
        </VuiBox>
        <VuiBox lineHeight={1}>
          <VuiTypography variant="h6" color="white">
            Need help?
          </VuiTypography>
          <VuiBox mb={1.825} mt={-1}>
            <VuiTypography variant="caption" color="white" fontWeight="regular">
              Please check our docs
            </VuiTypography>
          </VuiBox>
          <VuiButton
            component={Link}
            href="https://github.com/SilkePilon/OpenDeliveryBot"
            target="_blank"
            rel="noreferrer"
            size="small"
            sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
              color: `${white.main} !important`,
              background: linearGradient(
                gradients.cardDark.main,
                gradients.cardDark.state,
                gradients.cardDark.deg
              ),
              "&:hover": {
                background: linearGradient(
                  gradients.cardDark.main,
                  gradients.cardDark.state,
                  gradients.cardDark.deg
                ),
              },
            })}
            fullWidth
          >
            DOCUMENTATION
          </VuiButton>
        </VuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
