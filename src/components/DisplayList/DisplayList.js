import React, { Component } from 'react';
import DisplayItem from '../DisplayItem/DisplayItem'; 
import { connect } from 'react-redux'; 

export class DisplayList extends Component {
    render() {
        return (
            <div>
                <h2>In DisplayList</h2>
                <p>{JSON.stringify(this.props.setItems)}</p>
                <ul>
                {this.props.setItems.map(shelfItem => {
                return(
                    <DisplayItem key={shelfItem.id} shelfItem={shelfItem}/>)}
                     )}
                </ul>

            </div>
        )
    }
}



const reduxStateToProps = (reduxState) => 
{
    return{
        setItems: reduxState.setItems
    }
}

export default connect(reduxStateToProps)(DisplayList);

{/* <ul>
    {this.props.movies.map((item) => {
        return (
            <MovieItem item={item} dispatch={this.props.dispatch} key={item.id} />
        )

    })}

</ul> */}


