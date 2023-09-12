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
// @mui material components
import Grid from "@mui/material/Grid";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard PRO React example components
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
import PropTypes from "prop-types";

function PricingCards({ prices }) {
  const [starter, premium, enterprise] = prices;
  return (
    <VuiBox
      position="relative"
      zIndex={10}
      mt={{ xs: -17, xl: -19, xxl: -19 }}
      px={{ xs: 1, sm: 0 }}
    >
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
      >
        <Grid item xs={12} lg={4} xl={3.3}>
          <DefaultPricingCard
            badge={{ color: "dark", label: "starter" }}
            price={{ currency: "$", value: starter }}
            specifications={[
              { label: "2 team members", includes: true },
              { label: "20GB Cloud storage", includes: true },
              { label: "Integration help", includes: false },
              { label: "Sketch Files", includes: false },
              { label: "API Access", includes: false },
              { label: "Complete documentation", includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "join now",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4} xl={3.3}>
          <DefaultPricingCard
            badge={{ color: "dark", label: "premium" }}
            price={{ currency: "$", value: premium }}
            specifications={[
              { label: "10 team members", includes: true },
              { label: "40GB Cloud storage", includes: true },
              { label: "Integration help", includes: true },
              { label: "Sketch Files", includes: true },
              { label: "API Access", includes: false },
              { label: "Complete documentation", includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "try premium",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4} xl={3.3}>
          <DefaultPricingCard
            badge={{ color: "dark", label: "enterprise" }}
            price={{ currency: "$", value: enterprise }}
            specifications={[
              { label: "Unlimited team members", includes: true },
              { label: "100GB Cloud storage", includes: true },
              { label: "Integration help", includes: true },
              { label: "Sketch Files", includes: true },
              { label: "API Access", includes: true },
              { label: "Complete documentation", includes: true },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "join now",
            }}
          />
        </Grid>
      </Grid>
    </VuiBox>
  );
}

// Typechecking props for the PricingCards
PricingCards.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCards;
