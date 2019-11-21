const pokemonCaught = [];
let id = 0;

module.exports = {
    catch: (req, res) => {
        const pokemonObj ={
            name: req.body.name,
            image: req.body.image,
            id: id++
        }
        pokemonCaught.push(pokemonObj)
        res.status(200).send(pokemonCaught)
    }, 
    rename: (req,res) => {
        const {id} = req.params;
        const {newName} =req.body;

        const index = pokemonCaught.findIndex(element => element.id === +id);
        pokemonCaught[index].name = newName;
        res.status(200).send(pokemonCaught);
    },

    release: (req,res) => {
        const {id} = req.params
        const index = pokemonCaught.findIndex(element => element.id === +id)
        pokemonCaught.splice(index, 1);
        res.status(200).send(pokemonCaught)

    },
    getAllPokemon: (req,res) => {
        res.status(200).send(pokemonCaught)
    }


}