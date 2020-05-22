import React, { Component } from 'react'
import { connect } from 'react-redux';

export class DisplayItem extends Component {


    render() {
        return (
            <div>
                <h4>In DisplayItem</h4>
                <p>{JSON.stringify(this.props.shelfItem)}</p>
                {/* <h2>{this.props.shelfItem.description}</h2> */}
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(DisplayItem);
