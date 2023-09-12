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

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";

// react-html-parser components
// import ReactHtmlParser from "react-html-parser";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Kanban application components
import Header from "layouts/applications/kanban/components/Header";

// Data
import boards from "layouts/applications/kanban/data";

function Kanban() {
  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <VuiBox py={3}>
        <VuiBox display="flex" justifyContent="flex-end" m={2}>
          <Header />
        </VuiBox>
        <VuiBox
          position="relative"
          my={4}
          sx={({ palette: { light }, functions: { pxToRem }, borders: { borderRadius } }) => ({
            "& .react-kanban-column": {
              backgroundColor: light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          <Board
            initialBoard={boards}
            allowAddCard
            allowAddColumn
            renderColumnHeader={({ id, title }, { addCard }) => (
              <>
                <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <VuiTypography variant="h6" color="white">
                    {title}
                  </VuiTypography>
                  <VuiButton
                    size="small"
                    color="info"
                    onClick={(event) => openNewCardForm(event, id)}
                  >
                    <Icon
                      sx={{ fontWeight: "bold", color: ({ palette: { white } }) => white.main }}
                    >
                      add
                    </Icon>
                  </VuiButton>
                </VuiBox>
                {newCardForm === id ? (
                  <VuiBox my={2.5}>
                    <VuiInput
                      value={formValue}
                      inputProps={{ rows: 2 }}
                      onChange={handeSetFormValue}
                      multiline
                    />
                    <VuiBox display="flex" mt={2}>
                      <VuiButton
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => {
                          addCard({ id: uuidv4(), template: formValue });
                          setFormValue("");
                        }}
                      >
                        add
                      </VuiButton>
                      <VuiBox ml={1}>
                        <VuiButton
                          variant="gradient"
                          color="light"
                          size="small"
                          onClick={closeNewCardForm}
                        >
                          cancel
                        </VuiButton>
                      </VuiBox>
                    </VuiBox>
                  </VuiBox>
                ) : null}
              </>
            )}
            renderCard={({ id, template }, { dragging }) => (
              <VuiBox
                key={id}
                dragging={dragging.toString() || undefined}
                display="block"
                width="calc(450px - 40px)"
                bgColor="white"
                color="white"
                borderRadius="md"
                mt={2.5}
                py={1.875}
                px={1.875}
                lineHeight={1.5}
                sx={({
                  palette: { gradients },
                  borders: { borderRadius },
                  functions: { linearGradient },
                }) => ({
                  borderRadius: borderRadius.lg,
                  background: linearGradient(
                    gradients.cardLight.main,
                    gradients.cardLight.state,
                    gradients.cardLight.deg
                  ),
                  fontSize: ({ typography: { size } }) => size.md,
                })}
              >
                {template}
              </VuiBox>
            )}
            onCardNew={() => null}
          />
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
