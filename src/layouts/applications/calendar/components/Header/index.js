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

// @mui material components
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiButton from "components/VuiButton";

// Image
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

function Header() {
  const avatarStyles = {
    border: ({ borders: { borderWidth }, palette: { grey } }) =>
      `${borderWidth[2]} solid ${grey[700]}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <VuiBox display="flex" alignItems="center">
      <VuiBox mt={0.5} pr={1}>
        <VuiBox mb={1} lineHeight={0}>
          <VuiTypography variant="caption" color="secondary" fontWeight="medium" color="white">
            Team members:
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex">
          <Tooltip title="Jessica Rowland" placement="top">
            <VuiAvatar src={team1} alt="team-1" size="sm" sx={avatarStyles} />
          </Tooltip>
          <Tooltip title="Audrey Love" placement="top">
            <VuiAvatar src={team2} alt="team-1" size="sm" sx={avatarStyles} />
          </Tooltip>
          <Tooltip title="Michael Lewis" placement="top">
            <VuiAvatar src={team3} alt="team-1" size="sm" sx={avatarStyles} />
          </Tooltip>
          <Tooltip title="Lucia Linda" placement="top">
            <VuiAvatar src={team4} alt="team-1" size="sm" sx={avatarStyles} />
          </Tooltip>
          <Tooltip title="Ronald Miller" placement="top">
            <VuiAvatar src={team5} alt="team-1" size="sm" sx={avatarStyles} />
          </Tooltip>
        </VuiBox>
      </VuiBox>
      <VuiBox height="75%" alignSelf="flex-end">
        <Divider orientation="vertical" light />
      </VuiBox>
      <VuiBox pl={1}>
        <VuiButton variant="contained" color="info" iconOnly>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
        </VuiButton>
      </VuiBox>
    </VuiBox>
  );
}

export default Header;
