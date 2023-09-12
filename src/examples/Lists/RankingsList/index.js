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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function RankingList({ title, date, rankings }) {
  const renderRankings = rankings.map(({ color, icon, name, description, value }, key) => (
    <VuiBox key={name} component="li">
      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiBox display="flex" alignItems="center">
          <VuiBox mr={2}>
            <VuiButton
              variant="outlined"
              color={color}
              size="small"
              iconOnly
              circular
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(34),
                minWidth: pxToRem(34),
                height: pxToRem(34),
                minHeight: pxToRem(34),
              })}
            >
              <Icon>{icon}</Icon>
            </VuiButton>
          </VuiBox>
          <VuiBox display="flex" flexDirection="column">
            <VuiTypography variant="button" color="white" fontWeight="medium" gutterBottom>
              {name}
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              {description}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiTypography variant="button" color={color} fontWeight="medium">
          {value}
        </VuiTypography>
      </VuiBox>
      {key === rankings.length - 1 ? null : (
        <Divider
          sx={{
            mt: 2,
            mb: 1,
          }}
        />
      )}
    </VuiBox>
  ));

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox display="flex" justifyContent="space-between" mb="24px" alignItems="center">
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </VuiTypography>
        <VuiTypography variant="button" color="text" fontWeight="regular" sx={{ display: "flex" }}>
          <Icon
            color="inherit"
            fontSize="small"
            sx={{
              mr: 0.75,
              mt: -0.125,
            }}
          >
            date_range
          </Icon>
          {date}
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {renderRankings}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the RankingList
RankingList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rankings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RankingList;
