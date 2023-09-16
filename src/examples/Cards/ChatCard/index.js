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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";
import linearGradient from "assets/theme/functions/linearGradient";
import colors from "assets/theme/base/colors";

function AnnouncementCard({ by, badge, title, description, value, action }) {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="flex-start">
        {by.image || by.name || by.date ? (
          <VuiBox display="flex" mr={2} mb="22px">
            {by.image ? (
              <VuiAvatar src={by.image} alt={by.name} size="sm" variant="rounded" />
            ) : null}
            <VuiBox display="flex" flexDirection="column" justifyContent="center" ml={1}>
              {by.name ? (
                <VuiTypography
                  variant="button"
                  fontWeight="medium"
                  color="white"
                  textTransform="capitalize"
                >
                  {by.name}
                </VuiTypography>
              ) : null}
              {by.date ? (
                <VuiTypography variant="button" color="text" fontWeight="regular">
                  {by.date}
                </VuiTypography>
              ) : null}
            </VuiBox>
          </VuiBox>
        ) : null}
        {badge.color && badge.label ? (
          <VuiBadge color={badge.color} badgeContent={badge.label} size="sm" container />
        ) : null}
      </VuiBox>
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          {title}
        </VuiTypography>
        <VuiBox mt="4px" mb={2} lineHeight={0}>
          <VuiTypography variant="button" fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox
          sx={{ background: linearGradient(cardContent.main, cardContent.state, cardContent.deg) }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="lg"
          p={2}
        >
          {value.amount ? (
            <VuiTypography fontSize={22} color="white" fontWeight="bold">
              {value.method ? (
                <VuiBox component="span" mr={0.5}>
                  <VuiTypography
                    variant="button"
                    color="text"
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    {value.type}
                  </VuiTypography>
                </VuiBox>
              ) : null}
              {value.amount}
              {value.method ? (
                <VuiBox component="span" ml={0.5}>
                  <VuiTypography
                    variant="button"
                    color="text"
                    fontWeight="medium"
                    verticalAlign="text-bottom"
                  >
                    / {value.method}
                  </VuiTypography>
                </VuiBox>
              ) : null}
            </VuiTypography>
          ) : (
            <VuiBox />
          )}
          {action.type === "internal" ? (
            <VuiButton
              component={Link}
              to={action.route}
              variant="contained"
              color="info"
              sx={({ breakpoints }) => ({
                [breakpoints.up("md")]: {
                  minWidth: "120px",
                },
                [breakpoints.only("lg")]: {
                  minWidth: "auto",
                },
              })}
            >
              {action.label}
            </VuiButton>
          ) : (
            <VuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              color="info"
              sx={({ breakpoints }) => ({
                [breakpoints.up("md")]: {
                  minWidth: "120px",
                },
                [breakpoints.only("lg")]: {
                  minWidth: "auto",
                },
              })}
            >
              {action.label}
            </VuiButton>
          )}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of AnnouncementCard
AnnouncementCard.defaultProps = {
  by: {},
  badge: {},
  value: {},
};

// Typechecking props for the AnnouncementCard
AnnouncementCard.propTypes = {
  by: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
  badge: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    method: PropTypes.string,
  }),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnnouncementCard;
