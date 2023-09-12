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

import { IoMdNotifications } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { FaShoppingCart, FaDropbox } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import colors from "assets/theme/base/colors";

const { primary, secondary, warning, success, error, info, lightblue } = colors;

export const timelineDataLight = [
  {
    color: "info",
    icon: <IoMdNotifications color={info.main} />,
    title: "$2400, Design changes",
    dateTime: "22 DEC 7:20 PM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "info",
      items: ["design"],
    },
  },
  {
    color: "error",
    icon: <AiFillHtml5 color={error.main} />,
    title: "New order #1832412",
    dateTime: "21 DEC 11 PM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "error",
      items: ["order", "#1832412"],
    },
  },
  {
    color: "lightblue",
    icon: <FaShoppingCart color={lightblue.main} />,
    title: "Server payments for April",
    dateTime: "21 DEC 9:34 PM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "lightblue",
      items: ["server", "payments"],
    },
  },
  {
    color: "warning",
    icon: <MdPayment color={warning.main} />,
    title: "New card added for order #4395133",
    dateTime: "20 DEC 2:20 AM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "warning",
      items: ["card", "#4395133", "priority"],
    },
  },
  {
    color: "primary",
    icon: <FaDropbox color={primary.main} />,
    title: "Unlock packages for development",
    dateTime: "18 DEC 4:54 AM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "primary",
      items: ["development"],
    },
  },
  {
    color: "success",
    icon: <IoMdNotifications color={success.main} />,
    title: "New message unread",
    dateTime: "16 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "success",
      items: ["message"],
    },
  },
  {
    color: "info",
    icon: <AiFillHtml5 color={info.main} />,
    title: "Notifications unread",
    dateTime: "15 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "info",
      items: ["design"],
    },
  },
  {
    color: "warning",
    icon: <FaShoppingCart color={warning.main} />,
    title: "New request",
    dateTime: "14 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "warning",
      items: ["request", "priority"],
    },
  },
  {
    color: "error",
    icon: <MdPayment color={error.main} />,
    title: "Controller issues",
    dateTime: "13 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "error",
      items: ["controller"],
    },
    lastItem: true,
  },
];

export const timelineDataDark = [
  {
    color: "white",
    icon: <IoMdNotifications color="white" />,
    title: "$2400, Design changes",
    dateTime: "22 DEC 7:20 PM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "info",
      items: ["design"],
    },
  },
  {
    color: "white",
    icon: <AiFillHtml5 color="white" />,
    title: "New order #1832412",
    dateTime: "21 DEC 11 PM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "error",
      items: ["order", "#1832412"],
    },
  },
  {
    color: "white",
    icon: <FaShoppingCart color="white" />,
    title: "Server payments for April",
    dateTime: "21 DEC 9:34 PM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "lightblue",
      items: ["server", "payments"],
    },
  },
  {
    color: "white",
    icon: <MdPayment color="white" />,
    title: "New card added for order #4395133",
    dateTime: "20 DEC 2:20 AM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "warning",
      items: ["card", "#4395133", "priority"],
    },
  },
  {
    color: "white",
    icon: <FaDropbox color="white" />,
    title: "Unlock packages for development",
    dateTime: "18 DEC 4:54 AM",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "primary",
      items: ["development"],
    },
  },
  {
    color: "white",
    icon: <IoMdNotifications color="white" />,
    title: "New message unread",
    dateTime: "16 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "success",
      items: ["message"],
    },
  },
  {
    color: "white",
    icon: <AiFillHtml5 color="white" />,
    title: "Notifications unread",
    dateTime: "15 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "info",
      items: ["design"],
    },
  },
  {
    color: "white",
    icon: <FaShoppingCart color="white" />,
    title: "New request",
    dateTime: "14 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "warning",
      items: ["request", "priority"],
    },
  },
  {
    color: "white",
    icon: <MdPayment color="white" />,
    title: "Controller issues",
    dateTime: "13 DEC",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    badges: {
      color: "error",
      items: ["controller"],
    },
    lastItem: true,
  },
];
