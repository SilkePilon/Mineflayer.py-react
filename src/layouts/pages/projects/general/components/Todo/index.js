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

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Vision UI Dasboard PRO Material components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dasboard PRO Material base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

function Todo({ color, title, date, project, company, defaultChecked, noDivider }) {
  const { borderWidth } = borders;
  const { info } = colors;
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      keepMounted
    >
      <MenuItem onClick={handleCloseMenu}>Action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Another action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <VuiBox
      component="li"
      width="100%"
      pr={2}
      mb={2}
      borderLeft={`${borderWidth[4]} solid ${colors[color].main}`}
      sx={{ listStyle: "none" }}
    >
      <VuiBox width="100%" pl={1} ml={2}>
        <VuiBox display="flex" alignItems="center">
          <Checkbox
            defaultChecked={defaultChecked}
            sx={{
              color: info.main,
              "&.Mui-checked": {
                color: info.main,
              },
            }}
          />
          <VuiBox ml={0.2} lineHeight={1}>
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {title}
            </VuiTypography>
          </VuiBox>
          <VuiBox ml="auto" color="secondary" pr={3} lineHeight={0}>
            <Icon
              fontSize="default"
              sx={{ cursor: "pointer", color: "#fff" }}
              onClick={handleOpenMenu}
            >
              more_horiz
            </Icon>
          </VuiBox>
          {renderMenu()}
        </VuiBox>
        <VuiBox
          display="flex"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mt={2}
          ml={{ xs: 0, md: 3 }}
          pl={0.5}
        >
          <VuiBox lineHeight={1} mb={{ xs: 1, sm: 0 }}>
            <VuiTypography display="block" variant="caption" fontWeight="regular" color="white">
              Date
            </VuiTypography>
            <VuiTypography variant="caption" fontWeight="bold" color="white">
              {date}
            </VuiTypography>
          </VuiBox>
          <VuiBox ml={{ xs: 0, sm: "auto" }} mb={{ xs: 1, sm: 0 }} lineHeight={1}>
            <VuiTypography display="block" variant="caption" fontWeight="regular" color="white">
              Project
            </VuiTypography>
            <VuiTypography variant="caption" fontWeight="bold" color="white">
              {project}
            </VuiTypography>
          </VuiBox>
          <VuiBox mx={{ xs: 0, sm: "auto" }} lineHeight={1}>
            <VuiTypography display="block" variant="caption" fontWeight="regular" color="white">
              Company
            </VuiTypography>
            <VuiTypography variant="caption" fontWeight="bold" color="white">
              {company}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      {noDivider ? null : <Divider light sx={{ marginBottom: 0 }} />}
    </VuiBox>
  );
}

// Setting default values for the props of Todo
Todo.defaultProps = {
  color: "info",
  noDivider: false,
  defaultChecked: false,
};

// Typechecking props for the Todo
Todo.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  noDivider: PropTypes.bool,
};

export default Todo;
