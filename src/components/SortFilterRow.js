import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

function SortFilterRow() {
  const {
    tableHeaders,
    setAssortmentColumn,
    setAssortmentType,
  } = useContext(StarWarsContext);

  const [columnToFilter, setColumnToFilter] = useState('');
  const [filterType, setFilterType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSelectChange(event) {
    const { selectedIndex } = event.nativeEvent.target.options;
    const selected = event.nativeEvent.target[selectedIndex].value;

    setColumnToFilter(selected);
  }

  function handleRadioCheck(event) {
    const selected = event.nativeEvent.srcElement.id;
    setFilterType(selected);
  }

  function handleButtonClick() {
    if (!columnToFilter || !filterType) {
      setErrorMessage('Please select filter properties');
      const resetMessage = 4000;
      setTimeout(() => {
        setErrorMessage('');
      }, resetMessage);
    } else {
      setAssortmentColumn(columnToFilter);
      setAssortmentType(filterType);
      setColumnToFilter('');
      setFilterType('');
    }
  }

  return (
    <div className="assortment-filters">
      <h4>Sort</h4>
      <select data-testid="column-sort" onChange={ handleSelectChange }>
        <option>-- Sort alphabetically --</option>
        {tableHeaders.map((header) => (
          <option key={ header } value={ header }>
            {header}
          </option>))}
      </select>
      <div className="assortment-radios-container">
        <input
          id="ascending"
          type="radio"
          name="sortment"
          data-testid="column-sort-input-asc"
          onClick={ handleRadioCheck }
        />
        <label htmlFor="ascending">Ascendente</label>
      </div>
      <div className="assortment-radios-container">
        <input
          id="descending"
          type="radio"
          name="sortment"
          data-testid="column-sort-input-desc"
          onClick={ handleRadioCheck }
        />
        <label htmlFor="descending">Descendente</label>
      </div>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleButtonClick }
      >
        Sort
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default SortFilterRow;
