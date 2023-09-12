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
import VuiBadge from "components/VuiBadge";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Custom styles for the Card

function Card({ image, badge, content, progress, attachedFiles, members }) {
  const renderMembers = members.map((member, key) => {
    const imageAlt = `image-${key}`;

    return (
      <VuiAvatar
        key={imageAlt}
        src={member}
        alt={imageAlt}
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { grey } }) =>
            `${borderWidth[2]} solid ${grey[700]}`,
          cursor: "pointer",
          position: "relative",
          ml: -1,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    );
  });

  return (
    <VuiBox>
      {image && <VuiBox component="img" src={image} width="100%" borderRadius="lg" mb={1} />}
      <VuiBadge
        variant="basic"
        size="lg"
        color={badge.color}
        badgeContent={badge.label}
        container
      />
      <VuiBox mt={1} mb={2}>
        <VuiTypography variant="body2" color="white" mb={2}>
          {content}
        </VuiTypography>
        {progress > 0 && (
          <VuiBox mt={0.25}>
            <VuiProgress variant="contained" value={progress} color={badge.color} />
          </VuiBox>
        )}
      </VuiBox>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiBox display="flex" alignItems="center" color="text">
          {attachedFiles && (
            <>
              <VuiTypography variant="body2" color="text" sx={{ lineHeight: 0 }}>
                <Icon sx={{ fontWeight: "bold" }}>attach_file</Icon>
              </VuiTypography>
              <VuiTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{attachedFiles}
              </VuiTypography>
            </>
          )}
        </VuiBox>
        <VuiBox display="flex">{renderMembers}</VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default props for the Card
Card.defaultProps = {
  image: "",
  progress: 0,
  attachedFiles: "",
};

// Typechecking props for the Card
Card.propTypes = {
  image: PropTypes.string,
  badge: PropTypes.shape({
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
  content: PropTypes.node.isRequired,
  progress: PropTypes.number,
  attachedFiles: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
