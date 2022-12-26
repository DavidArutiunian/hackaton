import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";
import "normalize.css";
import { Phase2 } from "./core/Phase2";

const app = new Phase2();
app.run();
const order = app.build();
app.cleanup();

console.log({ order });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<React.StrictMode />);
