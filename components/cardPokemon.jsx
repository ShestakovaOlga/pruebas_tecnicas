import React, { useState } from "react";
import colors from "../constants/colors";

export function CardPokemon(props) {
    return <div style={{
        border: '1px solid none',
        boxShadow: `0px 0px 13px -1px gray`,
        borderRadius: 4,
        overflow: 'hidden',
        width: 250,
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    }}>
        <img style={{
            width: 250,
            height: 200,
            backgroundColor: colors.grayLigth,
        }} src={props.img} alt="Img de pokemon" />
        <div style={{
            border: '1px solid colors.grayLigth',
            backgroundColor: colors.gray,
            width: 40,
            position: 'absolute',
            transform: 'translate(-1%, 1235%)',
            fontSize: '0.8rem',
            textAlign: 'center',
        }}>ID/{props.id}</div>


        <div style={{
        }}>
            <h3 style={{
                marginLeft: 20,
                marginTop: 15
            }}>{props.name}</h3>

            {props.ability.map(a => <span style={{
                fontSize: '0.8rem',
                marginLeft: 20,
                border: '1px solid #F0B27A',
                borderRadius: 5,
                padding: 5,
            }}>{a}</span>)}
        </div>
    </div>
}