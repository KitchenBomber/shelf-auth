import React, { Component } from 'react'
import { connect } from 'react-redux';

export class DisplayItem extends Component {


    handleClick=() => {
        console.log('in handleClick Delete');
        if (this.props.reduxState.user.id === this.props.shelfItem.user_id) {
                this.props.dispatch({type: 'DELETE_ITEM', payload: this.props.shelfItem.id }); 
        } else {
            alert('You do not have permission to delete this item!')
        }
    }

    render() {
        return (
            <div>
                <h4>In DisplayItem</h4>
                <li>
                <p>{JSON.stringify(this.props.shelfItem)}</p>
                <h2>{this.props.shelfItem.description}</h2>
                <img src={this.props.shelfItem.image_url}></img>
                <button onClick={this.handleClick} >Delete</button>
                </li>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(DisplayItem);
