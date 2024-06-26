import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import ProductColor from './ProductColor';
const items = [1, 2, 3, 4, 5,16,17,18,19,20,21,22,23,24,25,26,12];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className='md:w-[32%] mb-3'>
            <Product src="image/p1.png" badge={true}></Product>
              <div className='flex justify-between items-center mt-4'>
                <ProductTitle title="Basic Crew Neck Tee"></ProductTitle>
                  <ProductPrice price="$44.00"></ProductPrice>
              </div>
            <ProductColor color="Black"></ProductColor>
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelected, setitemSelected] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setitemSelected(event.selected)
    setItemOffset(newOffset);
  };

  return (
    <>
        <div className='md:flex md:flex-wrap md:justify-between md:gap-x-2'>
            <Items currentItems={currentItems} />
        </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        // previousLinkClassName="page-link"
        nextClassName="hidden"
        // nextLinkClassName="page-link"
        activeClassName="active"
        containerClassName="flex gap-x-4"
        pageClassName="page-item"
        pageLinkClassName="inline-block border border-solid border-black py-2 px-4 rounded-full bg-slate-900 text-white hover:bg-sky-500/100 hover:border-sky-500/100 duration-300"
      />
      <p>Products from {itemOffset} to {itemOffset + 3} of {items.length}</p>
    </>
  );
}

export default Pagination