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
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Vision UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Vision UI Dashboard PRO React theme functions
import colors from "assets/theme/base/colors";

// Vision UI Dashboard PRO React theme functions
import linearGradient from "assets/theme/functions/linearGradient";
import tripleLinearGradient from "assets/theme/functions/tripleLinearGradient";

// Images
import pattern from "assets/images/shapes/pattern-lines.svg";

function IllustrationLayout({ color, header, title, description, illustration, children, top }) {
  const { gradients } = colors;
  return (
    <PageLayout
      background={tripleLinearGradient(
        gradients.cover.main,
        gradients.cover.state,
        gradients.cover.stateSecondary,
        gradients.cover.angle
      )}
    >
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
          label: "buy now",
        }}
      />
      <VuiBox
        height="100%"
        width="50vw"
        display={{ xs: "none", md: "block" }}
        position="absolute"
        top={0}
        right={0}
        sx={({ breakpoints }) => ({
          overflow: "hidden",
          [breakpoints.down("xl")]: {
            ml: "100px",
          },
          [breakpoints.down("lg")]: {
            display: "none",
          },
        })}
        zIndex={0}
      >
        <VuiBox
          display={{ xs: "none", lg: "flex" }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="calc(100%)"
          height="calc(100%)"
          position="relative"
          textAlign="center"
          variant="gradient"
          m={0}
          px={{ xs: 13, lg: 6, xl: 13 }}
          sx={{
            overflow: "hidden",
            background: linearGradient(
              gradients.info.main,
              gradients.info.state,
              gradients.info.deg
            ),
          }}
        >
          {illustration.image && (
            <VuiBox
              component="img"
              src={illustration.image}
              alt="chat-illustration"
              width="100%"
              maxWidth="100%"
            />
          )}
        </VuiBox>
      </VuiBox>

      <VuiBox
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          alignItems: "center",
          maxWidth: "1044px",
          minHeight: "75vh",
          margin: "0 auto",
        }}
      >
        <VuiBox
          mt={top}
          mr="auto !important"
          sx={({ breakpoints }) => ({
            [breakpoints.down("xl")]: {
              ml: "30px",
            },
            [breakpoints.down("lg")]: {
              ml: "auto",
              mr: "auto !important",
            },
            [breakpoints.down("md")]: {
              maxWidth: "90%",
              pl: "7px",
              pr: "10px !important",
            },
          })}
        >
          <VuiBox
            pt={3}
            pr={3}
            pl={{ xs: 3, xl: 2 }}
            mx={{ xs: "auto !important", xl: "unset !important" }}
            maxWidth={"350px"}
          >
            <>
              <VuiBox mb="35px">
                <VuiTypography
                  textAlign={"start"}
                  variant="h3"
                  fontWeight="bold"
                  color="white"
                  mb="10px"
                >
                  {title}
                </VuiTypography>
                <VuiTypography
                  textAlign={"start !important"}
                  mx="auto"
                  sx={({ typography: { size }, functions: { pxToRem } }) => ({
                    fontWeight: "regular",
                    fontSize: size.sm,
                  })}
                  color="white"
                >
                  {description}
                </VuiTypography>
              </VuiBox>
            </>
          </VuiBox>

          <VuiBox
            pl={{ xs: 3, xl: 1 }}
            pr={3}
            mb="50px"
            mx="auto"
            ml="auto !important"
            sx={({ breakpoints }) => ({
              mt: { top },
              maxWidth: "350px",
              [breakpoints.down("xl")]: {
                mr: "100px",
              },
              [breakpoints.up("lg")]: {
                mr: "95px",
              },
              [breakpoints.only("lg")]: {
                mr: "auto",
                ml: "auto !important",
              },
              [breakpoints.down("lg")]: {
                mr: "auto",
                ml: "auto !important",
              },
              [breakpoints.down("md")]: {
                mr: "unset",
                pr: "7px",
                pl: "10px !important",
              },
            })}
          >
            {children}
          </VuiBox>

          <Footer />
        </VuiBox>
      </VuiBox>
    </PageLayout>
  );
}

// Setting default values for the props of IllustrationLayout
IllustrationLayout.defaultProps = {
  color: "info",
  header: "",
  title: "",
  description: "",
  illustration: {},
};

// Typechecking props for the IllustrationLayout
IllustrationLayout.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  illustration: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default IllustrationLayout;

// function CoverLayout({ color, header, title, description, image, top, cardContent, children }) {
//   const { gradients } = colors;
//   return (
//     <PageLayout
//       background={tripleLinearGradient(
//         gradients.cover.main,
//         gradients.cover.state,
//         gradients.cover.stateSecondary,
//         gradients.cover.angle
//       )}
//     >
//       <DefaultNavbar
//         routes={pageRoutes}
//         action={{
//           type: "external",
//           route: "https://creative-tim.com/product/vision-ui-dashboard-pro-react",
//           label: "buy now",
//         }}
//       />
//       <VuiBox
//         height="100%"
//         width="50vw"
//         display={{ xs: "none", md: "block" }}
//         position="absolute"
//         top={0}
//         left={0}
//         sx={({ breakpoints }) => ({
//           overflow: "hidden",
//           [breakpoints.down("xl")]: {
//             mr: "100px",
//           },
//           [breakpoints.down("lg")]: {
//             display: "none",
//           },
//         })}
//         zIndex={0}
//       >
//         <VuiBox
//           height="100%"
//           sx={{
//             backgroundImage: `url(${image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </VuiBox>
//       <VuiBox
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           position: "relative",
//           alignItems: "center",
//           maxWidth: "1044px",
//           minHeight: "75vh",
//           margin: "0 auto",
//         }}
//       >
//         <VuiBox
//           mt={top}
//           ml="auto !important"
//           sx={({ breakpoints }) => ({
//             [breakpoints.down("xl")]: {
//               mr: cardContent ? "50px" : "100px",
//             },
//             [breakpoints.down("lg")]: {
//               mr: "auto",
//               ml: "auto !important",
//             },
//             [breakpoints.down("md")]: {
//               maxWidth: "90%",
//               pr: "7px",
//               pl: "10px !important",
//             },
//           })}
//         >
//           <VuiBox pt={3} px={3} mx="auto !important" maxWidth={cardContent ? "400px" : "350px"}>
//             {!header ? (
//               <>
//                 <VuiBox mb="35px">
//                   <VuiTypography
//                     textAlign={cardContent ? "center" : "start"}
//                     variant="h3"
//                     fontWeight="bold"
//                     color={color}
//                     mb="10px"
//                   >
//                     {title}
//                   </VuiTypography>
//                   <VuiTypography
//                     textAlign={cardContent ? "center !important" : "start !important"}
//                     mx="auto"
//                     sx={({ typography: { size }, functions: { pxToRem } }) => ({
//                       fontWeight: "regular",
//                       fontSize: size.sm,
//                     })}
//                     color="white"
//                   >
//                     {description}
//                   </VuiTypography>
//                 </VuiBox>
//               </>
//             ) : (
//               header
//             )}
//           </VuiBox>
//           <VuiBox
//             px={3}
//             mb="50px"
//             mx="auto"
//             ml="auto !important"
//             sx={({ breakpoints }) => ({
//               mt: cardContent ? "60px" : { top },
//               maxWidth: cardContent ? "450px" : "350px",
//               [breakpoints.down("xl")]: {
//                 mr: cardContent ? "0px" : "100px",
//               },
//               [breakpoints.only("lg")]: {
//                 mr: "auto",
//                 ml: "auto !important",
//               },
//               [breakpoints.down("lg")]: {
//                 mr: "auto",
//                 ml: "auto !important",
//               },
//               [breakpoints.down("md")]: {
//                 mr: cardContent ? "auto !important" : "unset",
//                 pr: "7px",
//                 pl: cardContent ? "0px !important" : "10px !important",
//               },
//             })}
//           >
//             {children}
//           </VuiBox>
//           <Footer />
//         </VuiBox>
//       </VuiBox>
//     </PageLayout>
//   );
// }
