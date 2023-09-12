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
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Vision UI Dasboard PRO Material components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// General page components
import Todo from "layouts/pages/projects/general/components/Todo";

function TodoList() {
  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="lg" fontWeight="bold" color="white">
          To do List
        </VuiTypography>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          23 - 30 March 2020
        </VuiTypography>
      </VuiBox>
      <Divider />
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Todo
            title="Check status"
            date="24 March 2019"
            project="2414_VR4sf3#"
            company="Creative Tim"
            defaultChecked
          />
          <Todo
            color="warning"
            title="Management discussion"
            date="24 March 2019"
            project="4411_8sIsdd23"
            company="Apple"
            defaultChecked
          />
          <Todo
            color="primary"
            title="New channel distribution"
            date="25 March 2019"
            project="827d_kdl33D1s"
            company="Slack"
            defaultChecked
          />
          <Todo
            color="success"
            title="IOS App development"
            date="26 March 2019"
            project="88s1_349DA2sa"
            company="Facebook"
            noDivider
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default TodoList;
