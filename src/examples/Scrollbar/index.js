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

export const renderTrack = ({ style, ...props }) => {
  const trackStyle = {
    position: "absolute",
    maxWidth: "100%",
    width: 6,
    transition: "opacity 200ms ease 0s",
    opacity: 0,
    background: "transparent",
    bottom: 2,
    top: 2,
    borderRadius: 3,
    right: 0,
  };
  return <div style={{ ...style, ...trackStyle }} {...props} />;
};
export const renderTrackRTL = ({ style, ...props }) => {
  const trackStyle = {
    position: "absolute",
    width: 6,
    transition: "opacity 200ms ease 0s",
    opacity: 0,
    bottom: 2,
    top: 2,
    borderRadius: 3,
    right: "unset",
    left: 0,
  };
  return <div style={{ ...style, ...trackStyle }} {...props} />;
};
export const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 15,
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
export const renderView = ({ style, ...props }) => {
  const viewStyle = {
    marginRight: window.innerWidth <= 1680 ? -6 : -22,
  };
  return <div style={{ ...style, ...viewStyle }} {...props} />;
};
export const renderViewRTL = ({ style, ...props }) => {
  const viewStyle = {
    marginRight: "unset",
    marginLeft: -16,
  };
  return <div style={{ ...style, ...viewStyle }} {...props} />;
};
