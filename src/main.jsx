import React, { useState, useEffect } from "react";
import colors from "../constants/colors";
import { CardPokemon } from "../components/cardPokemon";
import { GetPokemons } from "../server";

export function Main() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        GetPokemons().then((pok) => {
            console.log(pok);
            setPokemons(pok)
        })
    }, [])


    return <div style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: colors.yellow,
    }}>
        <div style={{
            width: 150,
            height: 150,
            backgroundColor: colors.black,
            transform: 'rotate(45deg)',
            position: 'absolute',
            left: -80,
            top: -80
        }}></div>
        <div style={{
            width: 150,
            height: 150,
            backgroundColor: colors.black,
            transform: 'rotate(45deg)',
            position: 'absolute',
            right: -80,
            top: -80
        }}></div>
        <div style={{
            width: 250,
            height: 250,
            backgroundColor: colors.red,
            border: '1px solid red',
            borderRadius: 150,
            position: 'absolute',
            right: -70,
            bottom: -910
        }}> </div>
        <div style={{
            width: 250,
            height: 250,
            backgroundColor: colors.red,
            border: '1px solid red',
            borderRadius: 150,
            position: 'absolute',
            left: -70,
            bottom: -910
        }}></div>
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 40,
            }}>
                <input style={{
                    borderStyle: "none",
                    width: 400,
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    color: colors.grayLigth,
                }} type="search" name="filterPok" id="filterP" placeholder="Filtra pokemons por nombre.. " />
            </div>
            <div style={{
                display: 'grid',
                justifyContent: 'center',
                gridColumnGap: 50,
                gridRowGap: 50,
                gridTemplateColumns: 'auto auto auto auto',
            }}>
                {pokemons.map((p) => {
                    return <CardPokemon img={p.img} name={p.name} ability={p.ability} id={p.id} />
                })}
            </div>
        </div>
    </div >
}