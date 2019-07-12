import React, { useState } from "react";
import colors from "../constants/colors";


export function Footer() {
    return <div style={{
        width: '100vw',
        height: '120px',
        backgroundColor: colors.footerColor,
    }}>
        <div style={{
            display: 'flex',
        }}>
            <a style={{

            }} href="http://">Home</a>
            <a href="http://">Search</a>
        </div>

    </div>
}