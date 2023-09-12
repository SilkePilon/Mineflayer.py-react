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

/** 
  All of the routes for the page layout of Vision UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// Vision UI Dashboard PRO React icons

import { IoDocument } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdTableRows } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";

// Vision UI Dashboard PRO theme
import colors from "assets/theme/base/colors";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <IoHome size="16px" color="white" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
      },
      { name: "CRM", key: "crm", route: "/dashboards/crm" },
    ],
  },
  {
    name: "Users",
    key: "users",
    icon: <IoPeople size="16px" color="white" />,
    collapse: [
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
      {
        name: "New User",
        key: "new-user",
        route: "/pages/users/new-user",
      },
    ],
  },
  {
    name: "Profile",
    key: "profile",
    icon: <IoPerson size="16px" color="white" />,
    collapse: [
      {
        name: "Profile Overview",
        key: "profile-overview",
        route: "/pages/profile/profile-overview",
      },
      {
        name: "Teams",
        key: "teams",
        route: "/pages/profile/teams",
      },
      {
        name: "All Projects",
        key: "all-projects",
        route: "/pages/profile/all-projects",
      },
    ],
  },
  {
    name: "Extra",
    key: "extra",
    icon: <FaGlobe size="16px" color="white" />,
    collapse: [
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl" },
      { name: "Widgets", key: "widgets", route: "/pages/widgets" },
      { name: "Charts", key: "charts", route: "/pages/charts" },
      {
        name: "Alerts",
        key: "alerts",
        route: "/pages/alerts",
      },
    ],
  },
  {
    name: "Account",
    key: "account",
    icon: <IoBuild size="16px" color="white" />,
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },
      {
        name: "Invoice",
        key: "invoice",
        route: "/pages/account/invoice",
      },
    ],
  },
  {
    name: "Projects",
    key: "projects",
    icon: <IoDocument size="16px" color="white" />,
    collapse: [
      {
        name: "General",
        key: "general",
        route: "/pages/projects/general",
      },
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
    ],
  },
  {
    name: "Orders",
    key: "orders",
    icon: <IoStatsChart size="16px" color="white" />,
    collapse: [
      {
        name: "Order List",
        key: "order-list",
        route: "/ecommerce/orders/order-list",
      },
      {
        name: "Order Details",
        key: "order-details",
        route: "/ecommerce/orders/order-details",
      },
    ],
  },
  {
    name: "General",
    key: "general",
    icon: <IoDocuments size="16px" color="white" />,
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
      },
    ],
  },
  {
    name: "Products",
    key: "products",
    icon: <FaShoppingCart size="16px" color="white" />,
    collapse: [
      {
        name: "New Product",
        key: "new-product",
        route: "/ecommerce/products/new-product",
      },
      {
        name: "Edit Product",
        key: "edit-product",
        route: "/ecommerce/products/edit-product",
      },
      {
        name: "Product Page",
        key: "product-page",
        route: "/ecommerce/products/product-page",
      },
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <IoHome size="16px" color="white" />,
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-in/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-in/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-in/illustration",
      },
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    icon: <IoHome size="16px" color="white" />,
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-up/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-up/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-up/illustration",
      },
    ],
  },
  {
    name: "Applications",
    key: "applications",
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        icon: <MdSpaceDashboard size="16px" color={colors.info.main} />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        icon: <RiProfileLine size="16px" color={colors.info.main} />,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        icon: <MdTableRows size="16px" color={colors.info.main} />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        icon: <FaCalendarAlt size="16px" color={colors.info.main} />,
      },
    ],
  },
];

export default pageRoutes;
