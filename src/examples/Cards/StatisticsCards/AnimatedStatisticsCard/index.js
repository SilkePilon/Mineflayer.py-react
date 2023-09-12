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

// react-router-dom components
// @mui material components
import Card from "@mui/material/Card";
// Images
import whiteCurved from "assets/images/animated-card-background.png";
import VuiBadge from "components/VuiBadge";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// react-tilt components
// import Tilt from "react-tilt";

function AnimatedStatisticsCard({ color, title, count, percentage, action }) {
  const sharedStyles = {
    transform: `translateZ(50px) scale(0.7)`,
    transition: "all 500ms linear",
  };

  const actionStyles = {
    my: 1,
    width: ({ functions: { pxToRem } }) => pxToRem(160),
    ...sharedStyles,

    "&:hover, &:focus": {
      transform: `translateZ(50px) scale(0.7)`,
    },
  };

  return (
    // <Tilt
    //   options={{
    //     reverse: false,
    //     max: 35,
    //     perspective: 1000,
    //     scale: 1,
    //     speed: 300,
    //     transition: true,
    //     axis: null,
    //     reset: true,
    //     easing: "cubic-bezier(0.03,0.98,0.52,0.99)",
    //   }}
    //   style={{ transformStyle: "preserve-3d" }}
    // >
      <Card
        sx={{
          backgroundImage: `url(${whiteCurved})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "visible",
          minHeight: "315px",
        }}
      >
        <VuiBox display="flex" p={2} flexDirection="column" alignItems="center">
          <VuiBox mt={1}>
            <VuiTypography
              fontSize={22}
              color="white"
              textTransform="capitalize"
              fontWeight="medium"
              sx={{
                mt: 1,
                ...sharedStyles,
              }}
            >
              {title}
            </VuiTypography>
          </VuiBox>
          <VuiTypography variant="h1" fontWeight="bold" color="white" sx={sharedStyles}>
            {count}
          </VuiTypography>
          <VuiBox sx={sharedStyles}>
            <VuiBadge
              color={percentage.color}
              badgeContent={<>&nbsp;{percentage.label}&nbsp;</>}
              size="lg"
              container
            />
          </VuiBox>
          {action.type === "internal" ? (
            <VuiButton
              component={Link}
              to={action.route}
              variant="outlined"
              color="white"
              sx={actionStyles}
            >
              {action.label}
            </VuiButton>
          ) : (
            <VuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              color="white"
              size="small"
              sx={actionStyles}
            >
              {action.label}
            </VuiButton>
          )}
        </VuiBox>
      </Card>
    // </Tilt>
  );
}

// Setting default values for the props of AnimatedStatisticsCard
AnimatedStatisticsCard.defaultProps = {
  color: "info",
};

// Typechecking props for the AnimatedStatisticsCard
AnimatedStatisticsCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnimatedStatisticsCard;
