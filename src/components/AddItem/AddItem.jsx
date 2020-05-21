import React, { Component } from 'react'

export class AddItem extends Component {

    state = {
        items: {
            userId: '',
            description: '',
            userId: ''
        }
    }

handleClick = () => {
    console.log('in handleClick of AddItem')
}

handleChange= (event, property) => {
    console.log('IN HANDLECHANGE');
    this.setState({
        items: {
            ...this.state.items,
            [property]: event.target.value
        }
    })
    
}



    render() {
        return (
            <div>
                <h2>AddItem.jsx</h2>
                <input type="text" placeholder="description" name="description" onChange={(event) => this.handleChange(event, "description")}></input>
                <input type="text" placeholder="imageUrl" name="image" onChange={(event) => this.handleChange(event, "image")}></input>
                <input type="text" placeholder="userId" name="userId" onChange={(event) => this.handleChange(event, "userId")}></input>
                <button onClick={this.handleClick}>Add Item!</button>
            </div>
        )
    }
}

export default AddItem;
