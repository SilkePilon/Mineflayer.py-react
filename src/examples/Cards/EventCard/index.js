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
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiAvatar from "components/VuiAvatar";

function EventCard({ id, image, title, dateTime, description, members, action }) {
  const renderMembers = members.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <VuiAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { grey } }) => ({
          border: `${borderWidth[2]} solid ${grey[700]}`,
          ml: -1.25,
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
    <Card sx={{ minHeight: "250px" }}>
      <VuiBox>
        <VuiBox display="flex" mb="12px" alignItems="center">
          <VuiAvatar src={image} alt={title} size="lg" variant="rounded" />
          <VuiBox ml="6px" display="flex" flexDirection="column" lineHeight={0}>
            <VuiTypography
              fontSize={16}
              fontWeight="medium"
              color="white"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
            {dateTime ? (
              <VuiTypography
                variant="caption"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                {dateTime}
              </VuiTypography>
            ) : null}
          </VuiBox>
        </VuiBox>
        <VuiBox>
          <VuiTypography fontSize={14} fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
        {id ? (
          <VuiBox>
            <VuiTypography component="span" fontSize={14} fontWeight="regular" color="text">
              Meeting ID:&nbsp;
            </VuiTypography>
            <VuiTypography component="span" fontSize={14} color="white">
              {id}
            </VuiTypography>
          </VuiBox>
        ) : null}
        <Divider light />
        <VuiBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <VuiButton
              component={Link}
              to={action.route}
              color={action.color}
              size="small"
              sx={{ minWidth: "90px" }}
            >
              {action.label}
            </VuiButton>
          ) : (
            <VuiButton
              component="a"
              href={action.route}
              color={action.color}
              size="small"
              sx={{ minWidth: "90px" }}
            >
              {action.label}
            </VuiButton>
          )}
          <VuiBox display="flex">{renderMembers}</VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of EventCard
EventCard.defaultProps = {
  id: "",
  dateTime: "",
  members: [],
};

// Typechecking props for the EventCard
EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string,
  description: PropTypes.node.isRequired,
  members: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["enternal", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
