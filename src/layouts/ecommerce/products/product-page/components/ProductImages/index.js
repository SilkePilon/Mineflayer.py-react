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

import { useState } from "react";

// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";

// Images
import image1 from "assets/images/ecommerce/product-page1.png";
import image2 from "assets/images/ecommerce/product-page2.png";
import image3 from "assets/images/ecommerce/product-page3.png";
import image4 from "assets/images/ecommerce/product-page4.png";
import image5 from "assets/images/ecommerce/product-page5.png";

function ProductImages() {
  const [currentImage, setCurrentImage] = useState(image1);
  const [imgsViewer, setImgsViewer] = useState(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  const handleSetCurrentImage = ({ currentTarget }) => {
    setCurrentImage(currentTarget.src);
    setImgsViewerCurrent(Number(currentTarget.id));
  };

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  return (
    <VuiBox>
      <ImgsViewer
        imgs={[{ src: image1 }, { src: image2 }, { src: image3 }, { src: image4 }, { src: image5 }]}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
      />

      <VuiBox
        backgroundColor="red !important"
        component="img"
        src={currentImage}
        alt="Product Image"
        borderRadius="xl"
        maxWidth="100%"
        height="unset !important"
        onClick={openImgsViewer}
      />
      <VuiBox mt={2} pt={1}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={4} md={2}>
            <VuiBox
              component="img"
              id={0}
              src={image1}
              alt="small image 1"
              shadow="md"
              width="100%"
              sx={({ borders: { borderRadius }, breakpoints }) => ({
                cursor: "pointer",
                height: "100%",
                objectFit: "cover",
                borderRadius: borderRadius.md,
                [breakpoints.up("md")]: {
                  borderRadius: borderRadius.lg,
                },
              })}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <VuiBox
              component="img"
              id={1}
              src={image2}
              alt="small image 2"
              shadow="md"
              width="100%"
              sx={({ borders: { borderRadius }, breakpoints }) => ({
                cursor: "pointer",
                height: "100%",
                objectFit: "cover",
                borderRadius: borderRadius.md,
                [breakpoints.up("md")]: {
                  borderRadius: borderRadius.lg,
                },
              })}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <VuiBox
              component="img"
              id={2}
              src={image3}
              alt="small image 3"
              shadow="md"
              width="100%"
              sx={({ borders: { borderRadius }, breakpoints }) => ({
                cursor: "pointer",
                height: "100%",
                objectFit: "cover",
                borderRadius: borderRadius.md,
                [breakpoints.up("md")]: {
                  borderRadius: borderRadius.lg,
                },
              })}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <VuiBox
              component="img"
              id={3}
              src={image4}
              alt="small image 4"
              shadow="md"
              width="100%"
              sx={({ borders: { borderRadius }, breakpoints }) => ({
                cursor: "pointer",
                height: "100%",
                objectFit: "cover",
                borderRadius: borderRadius.md,
                [breakpoints.up("md")]: {
                  borderRadius: borderRadius.lg,
                },
              })}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <VuiBox
              component="img"
              id={4}
              src={image5}
              alt="small image 5"
              shadow="md"
              width="100%"
              sx={({ borders: { borderRadius }, breakpoints }) => ({
                cursor: "pointer",
                height: "100%",
                objectFit: "cover",
                borderRadius: borderRadius.md,
                [breakpoints.up("md")]: {
                  borderRadius: borderRadius.lg,
                },
              })}
              onClick={handleSetCurrentImage}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default ProductImages;
