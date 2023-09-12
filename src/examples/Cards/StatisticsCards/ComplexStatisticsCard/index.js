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
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";

// Images
import whiteCurved from "assets/images/curved-images/reports-card-background.png";

function ComplexStatisticsCard({ color, icon, count, percentage, dropdown }) {
  const { size } = typography;

  return (
    <Card sx={{ background: `url(${whiteCurved})`, backgroundSize: "cover" }}>
      <VuiBox>
        <Grid container>
          <Grid item xs={8}>
            <VuiBox
              width="50px"
              height="50px"
              mb="44px"
              bgColor="info"
              borderRadius="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              shadow="md"
              fontSize={size.xl}
            >
              {icon}
            </VuiBox>
            <VuiBox lineHeight={0}>
              <VuiTypography fontSize={16} fontWeight="bold" color="white">
                {count.number}
              </VuiTypography>
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {count.label}
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={4}>
            <VuiBox textAlign="right">
              {dropdown && (
                <VuiBox mb={9.5} lineHeight={1} color="white">
                  <Icon fontSize="default" onClick={dropdown.action} sx={{ cursor: "pointer" }}>
                    more_horiz
                  </Icon>
                  {dropdown.menu}
                </VuiBox>
              )}
              <VuiTypography variant="caption" fontWeight="medium" color="white" align="right">
                {percentage}
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "dark",
  dropdown: false,
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  count: PropTypes.shape({
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  percentage: PropTypes.string.isRequired,
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexStatisticsCard;
