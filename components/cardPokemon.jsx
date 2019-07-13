import React, { useState } from "react";
import colors from "../constants/colors";

export function CardPokemon(props) {
    return <div style={{
        border: '1px solid red',
        width: 200,
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
    }}>
        <img style={{
            width: 200,
            height: 150,
            border: '1px solid green',
        }} src={props.img} alt="Img de pokemon" />
        <div style={{
            border: '1px solid colors.grayLigth',
            backgroundColor: colors.grayLigth,
            width: 40,
        }}>ID/{props.id}</div>
        <span style={{
            marginLeft: 20,
            marginTop: 15
        }}>{props.name}</span>

        <div>
            <span style={{
                marginLeft: 20,
            }}>{props.ability}</span>

        </div>
    </div>
}