import React, { Component } from 'react'
import { connect } from 'react-redux';

export class DisplayItem extends Component {


    render() {
        return (
            <div>
                <h4>In DisplayItem</h4>
                <li>
                {/* <p>{JSON.stringify(this.props.shelfItem)}</p> */}
                <h2>{this.props.shelfItem.description}</h2>
                <img src={this.props.shelfItem.image_url}></img>
                <button >Delete</button>
                </li>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(DisplayItem);
