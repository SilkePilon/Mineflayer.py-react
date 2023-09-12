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
import colors from "assets/theme/base/colors";

function InvoicesList({ title, invoices }) {
  const { info } = colors;
  const renderItems = invoices.map(({ color, icon, name, description, route }, key) => (
    <VuiBox
      key={name}
      component="li"
      py="6px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      mb={invoices.length - 1 === key ? 0 : 1}
    >
      <VuiBox display="flex" alignItems="center">
        <VuiBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          bgColor={info.main}
          borderRadius="lg"
          shadow="md"
          color="white"
          width="38px"
          height="38px"
          mr={2}
        >
          {icon}
        </VuiBox>
        <VuiBox display="flex" flexDirection="column">
          <VuiTypography variant="button" color={color} fontWeight="medium" gutterBottom>
            {name}
          </VuiTypography>
          <VuiTypography variant="caption" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox display="flex">
        <VuiTypography
          component={Link}
          variant="button"
          color={color}
          to={route}
          sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,

            "&:hover, &:focus": {
              transform: "translateX(5px)",
            },
          }}
        >
          <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  ));

  return (
    <Card>
      <VuiBox mb="28px">
        <VuiTypography variant="lg" color="white" fontWeight="bold" textTransform="capitalize">
          {title}
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the InvoicesList
InvoicesList.propTypes = {
  title: PropTypes.string.isRequired,
  invoices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InvoicesList;
