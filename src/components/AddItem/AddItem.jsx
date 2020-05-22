import React, { Component } from 'react'; 
import {connect} from 'react-redux'; 

export class AddItem extends Component {

    state = {
        items: {
            description: '',
            image_url: '',
            user_id: this.props.reduxState.user.id
        }
    }

handleClick = () => {
    console.log('in handleClick of AddItem', this.props.reduxState.user.id);
    console.log('NEW STATE', this.state)
    this.props.dispatch({type: 'NEW_ITEM', payload: this.state.items})
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
                <h2>Add your item!</h2>
                <input type="text" placeholder="description" name="description" onChange={(event) => this.handleChange(event, "description")}></input>
                <input type="text" placeholder="image url" name="image_url" onChange={(event) => this.handleChange(event, "image_url")}></input>
                <button onClick={this.handleClick}>Add Item!</button><br/>

                
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(AddItem);
