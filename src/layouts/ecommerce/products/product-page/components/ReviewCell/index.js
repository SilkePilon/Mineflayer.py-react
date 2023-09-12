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
import VuiTypography from "components/VuiTypography";

function ReviewCell({ rating }) {
  const ratings = {
    0.5: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    1: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    1.5: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star_half
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    2: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    2.5: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star_half
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    3: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star_outline
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    3.5: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star_half
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    4: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_outline
      </Icon>,
    ],
    4.5: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star_half
      </Icon>,
    ],
    5: [
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={1}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={2}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={3}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={4}
      >
        star
      </Icon>,
      <Icon
        sx={({ typography: { size } }) => ({ fontSize: `${size.sm} !important` })}
        color="warning"
        key={5}
      >
        star
      </Icon>,
    ],
  };

  return (
    <VuiTypography variant="h4" color="text">
      {ratings[rating]}
    </VuiTypography>
  );
}

// Typechecking props for the ReviewCell
ReviewCell.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewCell;
