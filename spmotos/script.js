document.addEventListener('DOMContentLoaded', () => {
    const getPokemonButton = document.getElementById('getPokemonButton');
    const pokemonInfo = document.getElementById('pokemonInfo');

    async function getRandomPokemon() {
        try {
            // Obtiene la lista de Pokémon disponibles
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const data = await response.json();

            // Selecciona un Pokémon aleatorio
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const pokemonUrl = data.results[randomIndex].url;

            // Obtiene la información detallada del Pokémon seleccionado
            const pokemonResponse = await fetch(pokemonUrl);
            const pokemonData = await pokemonResponse.json();

            // Genera el HTML con la información del Pokémon
            const pokemonHtml = `
                <h2>${pokemonData.name.toUpperCase()}</h2>
                <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                <p><strong>Height:</strong> ${pokemonData.height}</p>
                <p><strong>Weight:</strong> ${pokemonData.weight}</p>
                <p><strong>Abilities:</strong> ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
            `;

            // Actualiza el contenido del elemento pokemonInfo
            pokemonInfo.innerHTML = pokemonHtml;
        } catch (error) {
            pokemonInfo.innerHTML = '<p>Error fetching Pokémon data. Please try again.</p>';
            console.error('Error:', error);
        }
    }

    // Agrega un event listener al botón para obtener un Pokémon aleatorio
    getPokemonButton.addEventListener('click', getRandomPokemon);
});
