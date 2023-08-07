import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ReactPaginate from 'react-paginate';

const Pages = observer(({totalCount, limit}) => {
    const {stock} = useContext(Context)
    // const pageCount = Math.ceil(stock.totalCount / stock.limit)
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        setPage(stock.page-1)
    }, [stock.page])
    
    useEffect(() => {
        setPageCount(Math.ceil(totalCount / limit))
    }, [totalCount, limit])
    
    const onClick = (event) => {
        stock.setPage(event.selected + 1)
        // console.log(stock.page)
    }
    
    return (
            <div className='react-paginate'>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={onClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={page}
                />
            </div>
            
    );
});

export default Pages;
