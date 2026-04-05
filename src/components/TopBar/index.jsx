import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar({ context, advancedFeature, setAdvancedFeature }) {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit">
          Nguyễn Bách Phúc
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={advancedFeature}
                onChange={(e) => setAdvancedFeature(e.target.checked)}
                style={{ color: "white" }}
              />
            }
            label="Advanced"
          />
          <Typography variant="h5" color="inherit">
            {context}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
