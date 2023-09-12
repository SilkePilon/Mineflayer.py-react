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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Invoice() {
  const { borderWidth } = borders;
  const { grey } = colors;
  const borderBottom = `${borderWidth[1]} solid ${grey[500]}`;

  return (
    <DashboardLayout stickyNavbar>
      <DashboardNavbar />
      <VuiBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item sm={12} md={8}>
            <Card>
              {/* Invoice header */}
              <VuiBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item sm={12} md={5}>
                    <VuiBox mb="30px">
                      <VuiTypography
                        variant="lg"
                        textGradient={true}
                        color="logo"
                        letterSpacing={2}
                        fontWeight="medium"
                        sx={{
                          margin: "0 auto",
                        }}
                      >
                        Open Delivery Bot
                      </VuiTypography>
                    </VuiBox>

                    <VuiTypography
                      variant="button"
                      color="white"
                      lineHeight={0}
                      fontWeight="medium"
                    >
                      St. Independence Embankment,
                      <br /> 050105 Bucharest, Romania
                    </VuiTypography>
                    <VuiBox mt={1} mb={2}>
                      <VuiTypography display="block" variant="caption" color="white">
                        tel: +4 (074) 1090873
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item sm={12} md={7} lg={3}>
                    <VuiBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <VuiBox mt={1}>
                        <VuiTypography variant="button" color="white" fontWeight="medium">
                          Billed to: John Doe
                        </VuiTypography>
                      </VuiBox>
                      <VuiBox mb={1}>
                        <VuiTypography variant="caption" color="white">
                          4006 Locust View Drive
                          <br />
                          San Francisco CA
                          <br />
                          California
                        </VuiTypography>
                      </VuiBox>
                    </VuiBox>
                  </Grid>
                </Grid>
                <VuiBox mt={{ xs: 5, md: 10 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item sm={12} md={4}>
                      <VuiTypography variant="caption" color="white" fontWeight="regular">
                        Invoice no
                      </VuiTypography>
                      <VuiTypography fontSize={14} color="white" fontWeight="medium">
                        #0453119
                      </VuiTypography>
                    </Grid>
                    <Grid item sm={12} md={7} lg={5}>
                      <VuiBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 3, md: 0 }}
                      >
                        <VuiBox width="50%">
                          <VuiTypography variant="caption" color="white" fontWeight="regular">
                            Invoice date:
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox width="50%">
                          <VuiTypography variant="button" color="white" fontWeight="medium">
                            06/03/2019
                          </VuiTypography>
                        </VuiBox>
                      </VuiBox>
                      <VuiBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <VuiBox width="50%">
                          <VuiTypography variant="caption" color="white" fontWeight="medium">
                            Due date:
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox width="50%">
                          <VuiTypography variant="button" fontWeight="medium" color="white">
                            11/03/2019
                          </VuiTypography>
                        </VuiBox>
                      </VuiBox>
                    </Grid>
                  </Grid>
                </VuiBox>
              </VuiBox>

              {/* Invoice table */}
              <VuiBox p={3}>
                <VuiBox width="100%" overflow="auto">
                  <Table sx={{ minWidth: "32rem" }}>
                    <VuiBox component="thead">
                      <TableRow>
                        <VuiBox
                          component="th"
                          width={{ xs: "45%", md: "50%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="xxs" color="text" fontWeight="medium">
                            ITEM
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="xxs" color="text" fontWeight="medium">
                            QUANTITY
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="xxs" color="text" fontWeight="medium">
                            RATE
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="xxs" color="text" fontWeight="medium">
                            AMOUNT
                          </VuiTypography>
                        </VuiBox>
                      </TableRow>
                    </VuiBox>
                    <TableBody>
                      <TableRow>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          p={1}
                          py={2}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            Premium Support
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            1
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            $ 9.00
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            $ 9.00
                          </VuiTypography>
                        </VuiBox>
                      </TableRow>
                      <TableRow>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          p={1}
                          py={2}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            Vision UI Design System PRO
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            3
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            $ 100.00
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="body2" color="white">
                            $ 300.00
                          </VuiTypography>
                        </VuiBox>
                      </TableRow>
                      <TableRow>
                        <VuiBox component="td" textAlign="left" p={1}>
                          <VuiTypography variant="body2" color="white">
                            Parts for service
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox component="td" textAlign="left" py={2} pr={1} pl={3}>
                          <VuiTypography variant="body2" color="white">
                            1
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox component="td" textAlign="left" py={2} pr={1} pl={3}>
                          <VuiTypography variant="body2" color="white">
                            $ 89.00
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox component="td" textAlign="left" py={2} pr={1} pl={3}>
                          <VuiTypography variant="body2" color="white">
                            $ 89.00
                          </VuiTypography>
                        </VuiBox>
                      </TableRow>
                      <TableRow>
                        <VuiBox component="td" textAlign="left" p={1} borderBottom={borderBottom} />
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={2}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        />
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={2}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="lg" color="white" fontWeight="medium">
                            Total
                          </VuiTypography>
                        </VuiBox>
                        <VuiBox
                          component="td"
                          textAlign="left"
                          py={2}
                          pr={1}
                          pl={3}
                          borderBottom={borderBottom}
                        >
                          <VuiTypography variant="lg" color="white" fontWeight="medium">
                            $ 698
                          </VuiTypography>
                        </VuiBox>
                      </TableRow>
                    </TableBody>
                  </Table>
                </VuiBox>
              </VuiBox>

              {/* Invoice footer */}
              <VuiBox p={3} mt={7}>
                <Grid container>
                  <Grid item sm={12} lg={5}>
                    <VuiTypography variant="lg" color="white" fontWeight="medium">
                      Thank you!
                    </VuiTypography>
                    <VuiBox mt={1} mb={2} lineHeight={0}>
                      <VuiTypography variant="caption" fontWeight="regular" color="white">
                        If you encounter any issues related to the invoice you can contact us at:
                      </VuiTypography>
                    </VuiBox>
                    <VuiTypography
                      component="span"
                      variant="button"
                      fontWeight="regular"
                      color="white"
                    >
                      email:{" "}
                      <VuiTypography
                        component="span"
                        variant="button"
                        color="white"
                        fontWeight="medium"
                      >
                        support@creative-tim.com
                      </VuiTypography>
                    </VuiTypography>
                  </Grid>
                  <Grid item sm={12} lg={7}>
                    <VuiBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <VuiButton
                        variant="contained"
                        color="info"
                        sx={{ minWidth: "100px" }}
                        onClick={() => window.print(this)} // minify the sidebar before the print and set the navbar to be unfixed
                      >
                        print
                      </VuiButton>
                    </VuiBox>
                  </Grid>
                </Grid>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Invoice;
