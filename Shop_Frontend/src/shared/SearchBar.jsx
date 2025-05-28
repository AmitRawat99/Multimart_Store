import React, { useRef } from 'react';
import '../style/SearchBar.scss';
import { Container } from 'react-bootstrap';

function SearchBar({ onSearch }) {
  const SelectValues = useRef();
  const SearchValue = useRef();

  const checkValues = () => {
    const category = SelectValues.current.value;
    const keyword = SearchValue.current.value;
    onSearch(category, keyword);
  };

  return (
    <Container>
      <div className="Search_container">
        <div className="search_inputs">
          <select ref={SelectValues}>
            <option value="Category">Category</option>
            <option value="mobile">Mobiles</option>
            <option value="chair">Chair's</option>
            <option value="sofa">Sofa</option>
            <option value="watch">Watch</option>
            <option value="wireless">HeadPhone's</option>
          </select>
          <input ref={SearchValue} type="text" placeholder="Search Your Product" />
          <button onClick={checkValues}>Search</button>
        </div>
      </div>
    </Container>
  );
}

export default SearchBar;
