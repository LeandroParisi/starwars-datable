import React from 'react';
import './visual_identity/styles/main.scss';
import PlanetsTable from './components/PlanetsTable';
import TableFilters from './components/TableFilters';
import StarWarsProvider from './contexts/providers/StarWarsProvider';
import Header from './components/layoutComponents/Header';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <TableFilters />
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
