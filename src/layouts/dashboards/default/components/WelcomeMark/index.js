import React, { useState, useEffect } from 'react';

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox"; 
import VuiTypography from "components/VuiTypography";


import api from "api";

const WelcomeMark = () => {

  const data = api()

  return (
    <Card sx={{ 
      height: "340px",
      py: "32px",
      backgroundSize: "cover",
      backgroundPosition: "50%"
    }}>
      <iframe 
        id="iframe"
        src="http://localhost:5001"
        width="100%" 
        height="100%"
        onError={() => {
          document.getElementById("iframe").src = `${live}`;
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}>
        
      </iframe>
      
      {/* Card content */}
      <div style={{
       
        zIndex: 1  
      }}>
        <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
          <VuiBox>
            <VuiTypography color="white" variant="button" fontWeight="bold" mb="12px">
              Live preview for
            </VuiTypography>
            <VuiTypography color="white" variant="h3" fontWeight="bold" mb="18px">
              {`${data.username}`}
            </VuiTypography>
            <VuiTypography color="white" variant="h6" fontWeight="bold" mb="auto">
              {data.coords}
            </VuiTypography>
          </VuiBox>
          <VuiTypography
            component="a"
            href="http://localhost:5001"
            target="_blank"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{
              mr: "5px",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Fullscreen
            <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
          </VuiTypography>
        </VuiBox>
      </div>
      
    </Card>
  );
};

export default WelcomeMark;
