
import * as React from "react";
import * as ReactDom from "react-dom";

import * as Hi from "./components/hello";


ReactDom.render(
    <Hi.Hello compiler="TypeScript" framework="React"/>,
    document.getElementById("main-app-entry-point")
);
