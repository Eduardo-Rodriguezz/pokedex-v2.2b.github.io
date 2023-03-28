const miContainer = document.getElementById('principal');
let miUrl = 'https://pokeapi.co/api/v2/pokemon/';

obtenerPokes = (id) => {
    fetch(`${miUrl}${id}`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data)
    });
}

fetchPokemons = (number) => {
    for (let i = 1; i <= number; i++) {
        obtenerPokes(i);
    }
}

crearPokemon = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.other.dream_world.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name.toUpperCase();

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    miContainer.appendChild(card);
}

fetchPokemons(400);