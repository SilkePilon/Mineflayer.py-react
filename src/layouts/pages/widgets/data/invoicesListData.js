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

// Icons
import { IoIosRocket, IoMdCube } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default [
  {
    color: "white",
    icon: <IoIosRocket color="white" size="19px" />,
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
    icon: <IoBuild color="white" size="19px" />,
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
    icon: <IoMdCube color="white" size="19px" />,
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
  {
    color: "white",
    icon: <FaUser color="white" size="19px" />,
    name: "Happy users",
    description: (
      <VuiTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </VuiTypography>
    ),
    route: "/",
  },
];
