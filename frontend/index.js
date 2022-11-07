
import css from "./css/custom.css";
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./main";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);