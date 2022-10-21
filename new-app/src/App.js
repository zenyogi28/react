import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />

      </main>
    </Fragment>
  );
}

export default App;

// Just writing comment to test Git integration
