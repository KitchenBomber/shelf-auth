import React from 'react';
// //import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


const InfoPage = () => (
  <div>
    <p>
    {/* {JSON.stringify(this.props.setItem)}  */}

    HELLO
    </p>
  </div>
);

export default InfoPage;

// const putStateOnProps = (reduxState) => ({ reduxState });
// export default connect(putStateOnProps)(InfoPage);
