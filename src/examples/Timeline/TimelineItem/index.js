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
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";

// Timeline context
import { useTimeline } from "examples/Timeline/context";

// Custom styles for the TimelineItem
import { timelineItem, timelineItemIcon } from "examples/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, isWidgets, lastItem }) {
  const isDark = useTimeline();

  const renderBadges = badges.items.map((badge, key) => {
    const badgeKey = `badge-${key}`;
    return (
      <VuiBox key={badgeKey} mr={key === badges.items.length - 1 ? 0 : 0.5}>
        <VuiBadge color={badges.color} size="sm" badgeContent={badge} container variant="basic" />
      </VuiBox>
    );
  });

  return (
    <VuiBox
      position="relative"
      sx={!isWidgets ? (theme) => timelineItem(theme, { lastItem, isDark }) : null}
    >
      <VuiBox
        bgColor="transparent"
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="2px"
        zIndex={2}
      >
        {icon ? (
          <VuiBox
            position={isWidgets ? "" : "absolute"}
            top={isWidgets ? "" : "13px"}
            left={isWidgets ? "" : "14px"}
          >
            <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
          </VuiBox>
        ) : (
          <VuiBox
            bgColor="transparent"
            border="3px solid"
            borderColor="info.main"
            width="14px"
            height="14px"
            borderRadius="50%"
            position="absolute"
            top="-10px"
            left="6px"
            zIndex={2}
          ></VuiBox>
        )}
      </VuiBox>
      <VuiBox
        ml={5.75}
        pt={description ? 0.7 : 0.5}
        lineHeight={0}
        maxWidth="30rem"
        sx={{
          transform: "translate(0px, -17px)",
        }}
      >
        <VuiTypography variant="button" fontWeight="medium" color={isDark ? "white" : "white"}>
          {title}
        </VuiTypography>
        <VuiBox mt={0.5}>
          <VuiTypography variant="caption" fontWeight="medium" color={isDark ? "white" : "text"}>
            {dateTime}
          </VuiTypography>
        </VuiBox>
        <VuiBox mt={2} mb={1.5}>
          {description ? (
            <VuiTypography variant="button" fontWeight="regular" color="text">
              {description}
            </VuiTypography>
          ) : null}
        </VuiBox>
        {badges.items.length > 0 ? (
          <VuiBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </VuiBox>
        ) : null}
      </VuiBox>
    </VuiBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: {
    color: "white",
    items: [],
  },
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
  isWidgets: PropTypes.bool,
};

export default TimelineItem;
