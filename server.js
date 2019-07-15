
export async function GetPokemons() {
    const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const data = await result.json()
    let r = []
    for (let p of data.results) {
        const r1 = await fetch(p.url)
        const d = await r1.json()

        r.push({
            name: d.name.charAt(0).toUpperCase(1) + d.name.substr(1).toLowerCase(),
            id: d.id,
            img: d.sprites.front_default,
            ability: d.types.map(a => a.type.name.toUpperCase())
        })
    }

    return r
}
