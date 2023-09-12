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
import VuiProgress from "components/VuiProgress";

// ProductPage page components
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import ReviewCell from "layouts/ecommerce/products/product-page/components/ReviewCell";
import DefaultCell from "layouts/ecommerce/products/product-page/components/DefaultCell";

// Images
import image1 from "assets/images/ecommerce/product-page1.png";
import image2 from "assets/images/ecommerce/product-page2.png";
import image3 from "assets/images/ecommerce/product-page3.png";
import image4 from "assets/images/ecommerce/product-page4.png";

export default {
  columns: [
    { Header: "PRODUCT", accessor: "product", width: "50%" },
    { Header: "PRICE", accessor: "price", width: "12%" },
    { Header: "REVIEW", accessor: "review", align: "start", width: "15%" },
    { Header: "AVAILABILITY", accessor: "availability", align: "start", width: "40%" },
    { Header: "ID", accessor: "id", align: "center" },
  ],

  rows: [
    {
      product: <ProductCell image={image1} name="Christopher Knight Home" />,
      price: <DefaultCell>$89.53</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <VuiBox width="180px">
          <VuiProgress value={80} color="info" />
        </VuiBox>
      ),
      id: <DefaultCell>230019</DefaultCell>,
    },
    {
      product: <ProductCell image={image2} name="Bar Height Swivel Barstool" />,
      price: <DefaultCell>$99.99</DefaultCell>,
      review: <ReviewCell rating={5} />,
      availability: (
        <VuiBox width="180px">
          <VuiProgress value={90} color="info" />
        </VuiBox>
      ),
      id: <DefaultCell>87120</DefaultCell>,
    },
    {
      product: <ProductCell image={image3} name="Signature Design by Ashley" />,
      price: <DefaultCell>$129.00</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <VuiBox width="180px">
          <VuiProgress value={60} color="info" />
        </VuiBox>
      ),
      id: <DefaultCell>412301</DefaultCell>,
    },
    {
      product: <ProductCell image={image4} name="Modern Square" />,
      price: <DefaultCell>$59.99</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <VuiBox width="180px">
          <VuiProgress value={40} color="info" />
        </VuiBox>
      ),
      id: <DefaultCell>001992</DefaultCell>,
    },
  ],
};
