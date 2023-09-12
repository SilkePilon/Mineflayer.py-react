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
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function DefaultStatisticsCard({ title, count, percentage, dropdown }) {
  return (
    <Card>
      <VuiBox p={2}>
        <Grid container>
          <Grid item xs={7}>
            <VuiBox mb={0.5} lineHeight={1}>
              <VuiTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {title}
              </VuiTypography>
            </VuiBox>
            <VuiBox lineHeight={1}>
              <VuiTypography variant="h5" fontWeight="bold">
                {count}
              </VuiTypography>
              <VuiTypography variant="button" fontWeight="bold" color={percentage.color}>
                {percentage.value}&nbsp;
                <VuiTypography variant="button" fontWeight="regular" color="secondary">
                  {percentage.label}
                </VuiTypography>
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={5}>
            {dropdown && (
              <VuiBox width="100%" textAlign="right" lineHeight={1}>
                <VuiTypography
                  variant="caption"
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                  onClick={dropdown.action}
                >
                  {dropdown.value}
                </VuiTypography>
                {dropdown.menu}
              </VuiBox>
            )}
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of DefaultStatisticsCard
DefaultStatisticsCard.defaultProps = {
  percentage: {
    color: "success",
    value: "",
    label: "",
  },
  dropdown: false,
};

// Typechecking props for the DefaultStatisticsCard
DefaultStatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
      value: PropTypes.string,
    }),
  ]),
};

export default DefaultStatisticsCard;
