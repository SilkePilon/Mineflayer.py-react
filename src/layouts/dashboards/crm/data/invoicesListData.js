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
import VuiTypography from "components/VuiTypography";
import { IoIosRocket } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import { FaCube } from "react-icons/fa";

export default [
  {
    color: "white",
    icon: <IoIosRocket />,
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </VuiTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "white",
    icon: <IoBuild />,
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </VuiTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "white",
    icon: <FaCube />,
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <VuiTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </VuiTypography>
      </>
    ),
    route: "/",
  },
];
