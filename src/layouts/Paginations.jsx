import { useEffect, useState } from 'react';
import { PageItem } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Paginations({ total_pages, media_type, getData }) {
    const [pagination_number, setPagination_number] = useState(new Array(9).fill(0));

    const { page: currentPage } = useParams()

    const handlePaginations = () => {
        if (currentPage <= 5) return setPagination_number(getPaginationListNum(2));
        setPagination_number(getPaginationListNum(currentPage - 3));
    }

    const getPaginationListNum = (b, qty) => {
        let array_content = [];
        let j;
        for (let i = 1; i <= (qty ?? pagination_number.length); i++) {
            if (i == 1) {
                array_content.push(b);
                j = b;
            } else {
                let o = j + 1;
                array_content.push(o)
                j = o;
            }

            if(j == total_pages-1) break
        }
        return array_content;
    }

    useEffect(() => {
        getData(currentPage) 
        handlePaginations()
    }, [currentPage])

    return (
        <div className="pagination_box">
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <li className={`page-item ${currentPage == 1 ? 'active' : ''}`} >
                    <Link
                        className="page-link"
                        aria-current={currentPage == 1 ? 'page' : ''}
                        to={`/${media_type}/page/${1}`}
                    >{1}</Link>
                </li>
                {
                    currentPage <= 5 ? '' : <Pagination.Ellipsis />
                }
                {
                    pagination_number.map((item, i) => {
                        return (
                            <li className={`page-item ${item == currentPage ? 'active' : ''}`} >
                                <Link
                                    key={i}
                                    className="page-link"
                                    aria-current={item == currentPage ? 'page' : ''}
                                    to={`/${media_type}/page/${item}`}
                                >{item}</Link>
                            </li>
                        )
                    })
                }
                {
                    (currentPage >= total_pages - 8) ? '' : <Pagination.Ellipsis />
                }
                <li className={`page-item ${currentPage == total_pages ? 'active' : ''}`} >
                    <Link
                        className="page-link"
                        aria-current={currentPage == total_pages ? 'page' : ''}
                        to={`/${media_type}/page/${total_pages}`}
                    >{total_pages}</Link>
                </li>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
}

export default Paginations;