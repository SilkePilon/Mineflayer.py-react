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

// prop-types is a library for typechecking of props
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import colors from "assets/theme/base/colors";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import PropTypes from "prop-types";

function MiniStatisticsCard({ bgColor, title, count, percentage, icon, direction }) {
  const { info } = colors;

  return (
    <Card sx={{ padding: "18px 22px" }}>
      <VuiBox>
        <VuiBox>
          <Grid container alignItems="center">
            {direction === "left" ? (
              <Grid item>
                <VuiBox
                  bgColor={info}
                  color="#fff"
                  width="45px"
                  height="45px"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  {icon}
                </VuiBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <VuiBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <VuiTypography
                  variant="caption"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                  {title.text}
                </VuiTypography>
                <VuiTypography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="white"
                  sx={({ breakpoints }) => ({
                    [breakpoints.only("lg")]: {
                      fontSize: "16px",
                    },
                  })}
                >
                  {count}{" "}
                  <VuiTypography
                    variant="button"
                    color={percentage.color}
                    fontWeight="bold"
                    sx={({ breakpoints }) => ({
                      [breakpoints.only("lg")]: {
                        fontSize: "10px",
                      },
                      [breakpoints.only("xl")]: {
                        fontSize: "12px",
                      },
                    })}
                  >
                    {percentage.text}
                  </VuiTypography>
                </VuiTypography>
              </VuiBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <VuiBox
                  bgColor="#0075FF"
                  color="white"
                  width="45px"
                  height="45px"
                  marginLeft="auto"
                  borderRadius="lg"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  {icon}
                </VuiBox>
              </Grid>
            ) : null}
          </Grid>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default MiniStatisticsCard;
