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
        backgroundColor: colors.orange,
    }}>
        <div>
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