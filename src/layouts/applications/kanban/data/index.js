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

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// Kanban application components
import Card from "layouts/applications/kanban/components/Card";

// Images
import officeDark from "assets/images/kanban1.png";
import meeting from "assets/images/kanban2.png";
import homeDecore from "assets/images/kanban3.png";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";

export default {
  columns: [
    {
      id: uuidv4(),
      title: "Backlog",
      cards: [
        {
          id: uuidv4(),
          template: "Change me to change title",
        },
        {
          id: uuidv4(),
          template: "Drag me to 'In progress' section",
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={officeDark}
              badge={{ color: "dark", label: "pending" }}
              content="Website Design: New cards for blog section and profile details"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "In progress",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "error", label: "errors" }}
              content="Fix firefox errors"
              attachedFiles={9}
              members={[team2, team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "info", label: "updates" }}
              content="Argon Dashboard PRO - React"
              attachedFiles={3}
              members={[team5, team4]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              image={meeting}
              badge={{ color: "info", label: "updates" }}
              content="ReactJS v17 Updates"
              attachedFiles={3}
              members={[team1, team2, team3]}
            />
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      title: "In review",
      cards: [
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "warning", label: "in testing" }}
              content="Responsive Changes"
              attachedFiles={11}
              members={[team3, team2]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "success", label: "in review" }}
              content="Change images dimension"
              progress={80}
              members={[team3]}
            />
          ),
        },
        {
          id: uuidv4(),
          template: (
            <Card
              badge={{ color: "info", label: "in review" }}
              content="Update links"
              progress={60}
              attachedFiles={6}
              members={[team5, team1]}
            />
          ),
        },
      ],
    },
  ],
};
