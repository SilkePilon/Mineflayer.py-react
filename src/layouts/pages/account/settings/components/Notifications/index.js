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
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import VuiSwitch from "components/VuiSwitch";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Setting pages components
import TableCell from "layouts/pages/account/settings/components/TableCell";

function Notifications() {
  return (
    <Card id="notifications">
      <VuiBox lineHeight={1} mb="40px">
        <VuiBox>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Notifications
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" color="text" fontWeight="regular">
          Choose how you receive notifications. These notification settings apply to the things
          you’re watching.
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox minWidth="auto" overflow={{ sm: "scroll", lg: "hidden" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <VuiBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]}>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Email
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Push
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  SMS
                </TableCell>
              </TableRow>
            </VuiBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[2, 1, 2, 0.5]}>
                  <VuiBox lineHeight={1.4}>
                    <VuiTypography
                      display="block"
                      variant="button"
                      color="white"
                      fontWeight="regular"
                    >
                      Mentions
                    </VuiTypography>
                    <VuiTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user mentions you in a comment
                    </VuiTypography>
                  </VuiBox>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[2, 1, 2, 0.5]}>
                  <VuiBox lineHeight={1.4}>
                    <VuiTypography
                      display="block"
                      variant="button"
                      color="white"
                      fontWeight="regular"
                    >
                      Comments
                    </VuiTypography>
                    <VuiTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user comments your item.
                    </VuiTypography>
                  </VuiBox>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[2, 1, 2, 0.5]}>
                  <VuiBox lineHeight={1.4}>
                    <VuiTypography
                      display="block"
                      variant="button"
                      color="white"
                      fontWeight="regular"
                    >
                      Follows
                    </VuiTypography>
                    <VuiTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user follows you.
                    </VuiTypography>
                  </VuiBox>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 2, 0.5]}>
                  <VuiSwitch color="info" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[2, 1, 1, 0.5]} noBorder>
                  <VuiTypography
                    display="block"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                  >
                    Log in from a new device
                  </VuiTypography>
                </TableCell>
                <TableCell align="center" padding={[2, 1, 1, 0.5]} noBorder>
                  <VuiSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 1, 0.5]} noBorder>
                  <VuiSwitch color="info" defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[2, 1, 1, 0.5]} noBorder>
                  <VuiSwitch color="info" defaultChecked />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Notifications;
