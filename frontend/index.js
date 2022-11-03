
import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "./main";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Routes />);