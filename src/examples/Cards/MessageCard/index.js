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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function MessageCard({ image, text, action }) {
  return (
    <Card>
      <VuiBox>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <VuiBox
              component="img"
              src={image}
              alt="message-image"
              borderRadius="lg"
              shadow="md"
              width="100%"
              display="inherit"
            />
          </Grid>
          <Grid item xs={8}>
            <VuiBox mb={2} lineHeight={1.4}>
              <VuiTypography
                fontSize={16}
                color="white"
                sx={({ breakpoints }) => ({
                  [breakpoints.only("sm")]: {
                    fontSize: "14px",
                  },
                })}
                fontWeight="regular"
              >
                {text}
              </VuiTypography>
            </VuiBox>
            {action.type === "internal" ? (
              <VuiButton
                component={Link}
                to={action.route}
                color={action.color}
                variant="contained"
                width="135px"
                height="35px"
                size="small"
              >
                {action.label}
              </VuiButton>
            ) : (
              <VuiButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color={action.color}
                variant="contained"
                width="135px"
                height="35px"
                size="small"
              >
                {action.label}
              </VuiButton>
            )}
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the MessageCard
MessageCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "default",
      "primary",
      "secondary",
      "info",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageCard;
