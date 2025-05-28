import React, { useState } from 'react';
import SearchBar from '../shared/SearchBar';
import ShopProducts from '../shared/ShopProducts';
import Shop_Banner from '../Components/Sections/Shop_Banner';

function Shop() {
  const [filters, setFilters] = useState({ category: 'Category', keyword: '' });

  const handleSearch = (category, keyword) => {
    setFilters({ category, keyword });
  };

  return (
    <>
      <Shop_Banner />
      <SearchBar onSearch={handleSearch} />
      <ShopProducts category={filters.category} keyword={filters.keyword} />
    </>
  );
}

export default Shop;
