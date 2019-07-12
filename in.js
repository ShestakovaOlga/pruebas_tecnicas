import React, { useState } from "react"
import { render } from "react-dom"
import { HashRouter } from "react-router-dom";
import { } from "./src/main";


function App() {
    return <div>
        <HashRouter>
        </HashRouter>
    </div>
}

render(<App></App>, document.querySelector(`#app`))