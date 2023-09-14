import ReactPaginate from 'react-paginate';

const Pagination = ({ handlePageClick, numberOfPages }) => {

    return (
        <div className='pagination-container'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={numberOfPages}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeClassName='active'
            />
        </div>
    );
};

export default Pagination;