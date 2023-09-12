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
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";
import VuiButton from "components/VuiButton";

// React-icons
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function DefaultPricingCard({ badge, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <VuiBox key={label} display="flex" alignItems="center" p={1}>
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shadow="md"
        mr={2}
      >
        <VuiTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          {includes ? (
            <AiFillCheckCircle color="#fff" size="22px" />
          ) : (
            <AiFillCloseCircle color="#424563" size="22px" />
          )}
        </VuiTypography>
      </VuiBox>
      <VuiTypography variant="body2" color="text">
        {label}
      </VuiTypography>
    </VuiBox>
  ));

  return (
    <Card>
      <VuiBox textAlign="center">
        <VuiBadge
          variant="basic"
          color={badge.color}
          size="sm"
          badgeContent={badge.label}
          circular
          container
        />
        <VuiBox my={1}>
          <VuiTypography variant="h1" color="white">
            <VuiTypography display="inline" variant="h1" color="white">
              {price.currency}
            </VuiTypography>
            {price.value}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        {renderSpecifications}
        {action.type === "internal" ? (
          <VuiBox mt={3}>
            <VuiButton component={Link} to={action.route} color={action.color} fullWidth>
              {action.label}&nbsp;
            </VuiButton>
          </VuiBox>
        ) : (
          <VuiBox mt={3}>
            <VuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
            </VuiButton>
          </VuiBox>
        )}
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  badge: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "text",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]).isRequired,
  }).isRequired,
};

export default DefaultPricingCard;
