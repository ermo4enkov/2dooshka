import * as React from 'react';
import { withRouter } from 'react-router';
import Header from '../Header/Header';
import Main from '../Main/Main';


export const App = () => {
    return (
      <div>
        <Header />
        <Main/>
      </div>
    );
};

export default App;
