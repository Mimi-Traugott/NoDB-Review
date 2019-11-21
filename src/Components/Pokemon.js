import React, {Component} from 'react'

class Pokemon extends Component {
    constructor(){
        super()
        this.state = {
            toggleRename: false,
            renameInput: ''
        }
    }

    toggleEdit(){
        this.setState({toggleRename: !this.state.toggleRename})
    }

    handleInput (val){
        this.setState({
            renameInput: val
        })
    }

    saveButton(){
        this.props.saveFn(this.props.id, {newName: this.state.renameInput || this.props.name})
        this.toggleEdit()
    }

    render(){
        return (
            <div>
                {this.state.toggleRename ? (
                    <div>
                        <input onChange={(e) => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.saveButton()}>Save</button>
                    </div>
                ) : (
                    <h3 onDoubleClick={() => this.toggleEdit()}>{this.props.name}</h3>
                )}
                <img src={this.props.img} alt={this.props.name}/>
                <button onClick={() => this.props.releaseFn(this.props.id)}>Release</button>
            </div>
        )
    }
}

export default Pokemon