async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName2").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();
        console.log(data);

        const pokemonImg = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonPic");
        imgElement.src = pokemonImg;
        imgElement.style.display = "block";

        // Clear error message if successful
        document.getElementById("errorMessage").textContent = "";
    } 
    catch (error) {
        console.error(error);
        document.getElementById("errorMessage").textContent = "Pokémon not found. Try again!";
    }
}
