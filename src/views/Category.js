import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import s from './views.module.css';
import { selectors } from '../redux';

import { SortSelector } from 'Components/SortSelector';
import { PaginatedItems } from 'Components/PaginatedItems';


const sortOptions = [
  { value: 'ascending', label: 'Sort by ascending' },
  { value: 'descending', label: 'Sort by descending'}
]

export default function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expenses, setExpenses] = useState(useSelector(selectors.getProducts))

  useEffect(() => {
    if (location.search !== '') {
      return
    }
    navigate({...location, search: `sortBy=ascending`})
  }, [navigate, location])

  const sortOrder = new URLSearchParams(location.search).get('sortBy')

  useEffect(() => {
    setExpenses(prevExpenses => [...prevExpenses].sort((a, b) => {
      return sortOrder === 'ascending'
        ? (a.price - a.price * a.discount / 100) - (b.price - b.price * b.discount / 100)
        : (b.price - b.price * b.discount / 100) - (a.price - a.price * a.discount / 100);
    }))
  }, [sortOrder])
  
  const onSortOrderChange = (order) => {
    navigate({...location, search: `sortBy=${order}`
    })
  }
  
  return <div>
    <SortSelector
      options={sortOptions}
      onChange={onSortOrderChange}
      value={sortOrder ?? 'ascending'} />
    <div className={s.marginCategory}>
        <PaginatedItems itemsPerPage={6} expenses={ expenses }/>
    </div>
  </div>
}