import React from 'react';
import AddItem from '../AddItem/AddItem';
import DisplayList from '../DisplayList/DisplayList';

// //import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


const InfoPage = () => (

  <div>
    <section>
    {/* {JSON.stringify(this.props)}  */}
    <DisplayList />
   <AddItem />
    </section>
  </div>
);

export default InfoPage;

// const putStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putStateOnProps)(InfoPage);
