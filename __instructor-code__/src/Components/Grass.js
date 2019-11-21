import React, {Component} from 'react';
import grass from '../assets/pokemon-grass.png'

class Grass extends Component {
    constructor(){
        super()
        this.state = {
            grassClicked: false
        }
    }

    checkGrass(){
        if(!this.state.grassClicked){
            return this.setState({grassClicked: true})
        } else {
            this.catchPokemon()
        }
    }

    catchPokemon(){
        this.props.catchFn({
            name: this.props.pokemonData.name,
            img: this.props.pokemonData.sprites.front_default
        })
        this.setState({
            grassClicked: false
        })
        this.props.refreshFn()
    }

    render(){
        const {pokemonData} = this.props;
        return(
            <div className="grass">
                <img
                 onClick={() => this.checkGrass()}
                 src={this.state.grassClicked ? pokemonData.sprites.front_default : grass}
                 alt={pokemonData.name}/>
            </div>
        )
    }
}

export default Grass;