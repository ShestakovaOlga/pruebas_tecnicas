import React, { useState } from "react";
import colors from "../constants/colors";

export function NavBar() {
    return <div style={{
        width: '100vw',
        height: '60px',
        backgroundColor: colors.navBarColor,
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20,
        }}>
            <a style={{

            }} href="http://">Home</a>
            <a href="http://">Search</a>
        </div>

    </div>
}