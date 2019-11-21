import React, {Component} from 'react';
import axios from 'axios';
import Grass from './Grass'

class Finder extends Component {
    constructor(){
        super()
        this.state = {
            wildPokemonArr: []
        }
        this.componentDidMount=this.componentDidMount.bind(this);
    }  

    componentDidMount(){
        axios.get('/api/wild-pokemon').then(res => {
            this.setState ({
                wildPokemonArr: res.data
            })
        }).catch(err => console.log(err))
    }

    render (){
        console.log(this.state.wildPokemonArr)
        return(
            <div>
                {this.state.wildPokemonArr.map((element, index) => {
                    return (
                        <Grass
                        catchFn = {this.props.catchFn}
                        key={index}
                        pokemonData={element}
                        refreshFn={this.componentDidMount}/>
                    )
                })}
            </div>
        )
    }  
}

export default Finder;