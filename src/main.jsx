import React, { useState, useEffect } from "react";
import colors from "../constants/colors";
import { CardPokemon } from "../components/cardPokemon";
import { GetPokemons } from "../server";

export function Main() {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState('');
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
        display: 'flex',
        justifyContent: 'center'
    }}>
        <div style={{
            width: 150,
            height: 150,
            backgroundColor: colors.black,
            transform: 'rotate(45deg)',
            position: 'fixed',
            left: -80,
            top: -80
        }}></div>
        <div style={{
            width: 150,
            height: 150,
            backgroundColor: colors.black,
            transform: 'rotate(45deg)',
            position: 'fixed',
            right: -80,
            top: -80
        }}></div>
        <div style={{
            width: 250,
            height: 250,
            backgroundColor: colors.red,
            border: '1px solid red',
            borderRadius: 150,
            position: 'fixed',
            right: -125,
            bottom: -100
        }}> </div>
        <div style={{
            width: 250,
            height: 250,
            backgroundColor: colors.red,
            border: '1px solid red',
            borderRadius: 150,
            position: 'fixed',
            left: -125,
            bottom: -100
        }}></div>
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 40,
            }}>
                <input value={search} onChange={e => {
                    setSearch(e.target.value)
                }} style={{
                    borderStyle: "none",
                    boxShadow: 'none',
                    outline: 'none',
                    borderRadius: 5,
                    width: 400,
                    fontSize: '1.2rem',
                    textAlign: 'center',
                }} type="search" name="filterPok" id="filterP" placeholder="Filtra pokemons por nombre.. " />
            </div>
            <div style={{
                display: 'grid',
                justifyContent: 'center',
                gridColumnGap: 50,
                gridRowGap: 50,
                gridTemplateColumns: 'auto auto auto auto',
            }}>
                {pokemons.filter(p => p.name.toLowerCase().includes(search)).map((p) => {
                    return <CardPokemon img={p.img} name={p.name} ability={p.ability} id={p.id} />
                })}
            </div>
        </div>
    </div >
}