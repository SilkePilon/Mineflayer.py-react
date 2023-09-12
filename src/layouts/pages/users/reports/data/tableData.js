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
import VuiBadgeDot from "components/VuiBadgeDot";

// Images
import team1 from "assets/images/avatar2.png";
import team2 from "assets/images/avatar3.png";
import team3 from "assets/images/avatar4.png";
import team4 from "assets/images/avatar5.png";
import team5 from "assets/images/avatar6.png";
import team6 from "assets/images/avatar7.png";

export default {
  columns: [
    { name: "name", align: "left" },
    { name: "function", align: "left" },
    { name: "review", align: "left" },
    { name: "email", align: "center" },
    { name: "employed", align: "center" },
    { name: "id", align: "center" },
  ],

  rows: [
    {
      name: [team2, "Esthera Jackson"],
      function: "Manager",
      hasBorder: true,
      review: (
        <VuiBox ml={-1.325}>
          <VuiBadgeDot size="xs" badgeContent="Positive" />
        </VuiBox>
      ),
      email: "esthera@simmmple.com",
      employed: "23/04/18",
      id: "43431",
    },
    {
      name: [team1, "Alexa Liras"],
      function: "Programator",
      hasBorder: true,
      review: (
        <VuiBox ml={-1.325}>
          <VuiBadgeDot size="xs" badgeContent="Positive" />
        </VuiBox>
      ),
      email: "alexa@simmmple.com",
      employed: "11/01/19",
      id: "93021",
    },
    {
      name: [team3, "Laurent Perrier"],
      function: "Executive",
      hasBorder: true,
      review: (
        <VuiBox ml={-1.325}>
          <VuiBadgeDot color="white" size="xs" badgeContent="Neutral" />
        </VuiBox>
      ),
      email: "laurent@simmmple.com",
      employed: "19/09/17",
      id: "10392",
    },
    {
      name: [team4, "Freduardo Hill"],
      function: "Backend Developer",
      hasBorder: true,
      review: (
        <VuiBox ml={-1.325}>
          <VuiBadgeDot size="xs" color="info" badgeContent="Positive" />
        </VuiBox>
      ),
      email: "freduardo@simmmple.com",
      employed: "24/12/08",
      id: "34002",
    },
    {
      name: [team5, "Daniel Thomas"],
      function: "Manager",
      hasBorder: true,
      review: (
        <VuiBox ml={-1.325}>
          <VuiBadgeDot color="error" size="xs" badgeContent="Negative" />
        </VuiBox>
      ),
      email: "daniel@simmmple.com",
      employed: "04/10/21",
      id: "91879",
    },
    {
      name: [team6, "Mark Wilson"],
      function: "Programtor",
      review: (
        <VuiBox ml={-1.325}>
          <VuiBadgeDot size="xs" badgeContent="Positive" />
        </VuiBox>
      ),
      email: "mark@wilson.com",
      employed: "14/09/20",
      id: "23042",
    },
  ],
};
