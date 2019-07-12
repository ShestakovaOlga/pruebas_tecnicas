import React, { useState } from "react"
import { render } from "react-dom"
import { HashRouter } from "react-router-dom";
import { Main } from "./src/main";
import { NavBar } from "./src/navBar";
import { } from "./src/footer";

function App() {
    return <div>
        <NavBar />
        <Main />
    </div>
}

render(<App></App>, document.querySelector(`#app`))