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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";
import VuiAvatar from "components/VuiAvatar";

function TeamProfileCard({ color, title, description, industry, rating, members, dropdown }) {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    1.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star_half</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    2.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star_half</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    3.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star_half</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    4.5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star_half</Icon>,
    ],
    5: [
      <Icon key={1}>star</Icon>,
      <Icon key={2}>star</Icon>,
      <Icon key={3}>star</Icon>,
      <Icon key={4}>star</Icon>,
      <Icon key={5}>star</Icon>,
    ],
  };

  const renderMembers = members.map(({ image, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <VuiAvatar
        src={image}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { grey } }) => ({
          ml: -1.25,
          border: `${borderWidth[2]} solid ${grey[700]}`,
          cursor: "pointer",
          position: "relative",

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card>
      <VuiBox>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
            {title}
          </VuiTypography>
          {dropdown && (
            <VuiTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                width: "16px",
                cursor: "pointer",
              }}
            >
              <Icon fontSize="default" sx={{ color: "#fff" }}>
                more_vert
              </Icon>
            </VuiTypography>
          )}
          {dropdown.menu}
        </VuiBox>
        <VuiBox mb={2}>
          <VuiTypography fontSize={14} fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {industry ? (
            <VuiBox component="li" display="flex" flexDirection="column">
              <VuiBox display="flex" justifyContent="space-between" alignItems="center">
                <VuiTypography fontSize={14} fontWeight="regular" color="text">
                  Industry:
                </VuiTypography>
                <VuiBadge
                  variant="basic"
                  color="light"
                  size="lg"
                  badgeContent={industry}
                  container
                />
              </VuiBox>
              <Divider light />
            </VuiBox>
          ) : null}
          {rating ? (
            <VuiBox component="li" display="flex" flexDirection="column">
              <VuiBox display="flex" justifyContent="space-between" alignItems="center">
                <VuiTypography fontSize={14} fontWeight="regular" color="text">
                  Rating:
                </VuiTypography>
                <VuiBox
                  sx={({ functions: { pxToRem }, palette: { warning } }) => ({
                    fontSize: pxToRem(18),
                    fontWeight: "regular",
                    lineHeight: 0,
                    color: warning.main,
                  })}
                >
                  {ratings[rating]}
                </VuiBox>
              </VuiBox>
              <Divider light />
            </VuiBox>
          ) : null}
          {members ? (
            <VuiBox
              component="li"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <VuiTypography fontSize={14} fontWeight="regular" color="text">
                Members:
              </VuiTypography>
              <VuiBox display="flex">{renderMembers}</VuiBox>
            </VuiBox>
          ) : null}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of TeamProfileCard
TeamProfileCard.defaultProps = {
  color: "info",
  industry: "",
  rating: 0,
  members: [],
  dropdown: false,
};

// Typechecking props for the TeamProfileCard
TeamProfileCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  industry: PropTypes.string,
  rating: PropTypes.number,
  members: PropTypes.arrayOf(PropTypes.object),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default TeamProfileCard;
