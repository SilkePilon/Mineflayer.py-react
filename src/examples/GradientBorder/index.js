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

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
// Vision UI Dashboard PRO React context

function GradientBorder(props) {
  const { backgroundImage, children, borderRadius, width, minWidth, padding, ...rest } = props;
  return (
    <VuiBox
      padding={padding ? padding : "2px"}
      minWidth={minWidth}
      height="fit-content"
      borderRadius={borderRadius}
      sx={{
        width: "fit-content",
        height: "fit-content",
        backgroundImage: backgroundImage
          ? backgroundImage
          : "radial-gradient(94.43% 69.43% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      {...rest}
    >
      {children}
    </VuiBox>
  );
}

export default GradientBorder;
