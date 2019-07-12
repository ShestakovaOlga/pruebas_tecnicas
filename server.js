
export async function GetPokemons() {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await result.json()
    let r = []
    for (let p of data.results) {
        const r1 = await fetch(p.url)
        const d = await r1.json()
        console.log(d);

        r.push({
            name: d.name,
            id: d.id,
            img: d.sprites.front_default,
            ability: d.abilities.map(a => a.ability.name)
        })
    }

    return r
}
