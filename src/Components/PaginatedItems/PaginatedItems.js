import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import s from './PaginatedItems.module.css';
import goUp from "services/goUp";

import { ListProducts } from 'Components/ListProducts';

export default function PaginatedItems({ itemsPerPage, expenses }) {
  const [currentItems, setCurrentItems] = useState(expenses);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(expenses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(expenses.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, expenses]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % expenses.length;
    setItemOffset(newOffset);
    goUp()
  };

  return (
    <>
      <ListProducts list={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={s.container}
        pageClassName={s.link}
        nextClassName={s.nextBtn}
        previousClassName={s.prevBtn}
        activeClassName={s.activeBtn}
      />
    </>
  );
}