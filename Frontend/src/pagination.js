import React  from "react";

const Pagination = ({postsperPage, totalPosts ,paginate}) => {

    const pageNumbers =  [];

    for(let i = 1 ; i <= Math.ceil(totalPosts/postsperPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul aria-label="pg" className='pagination'>'
                {pageNumbers.map(number =>(

                    <li key={number} className="page-item">

                     <a onClick = { ()=>paginate(number) }href="!#" className="page-link">
                             {number}
                     </a>   
                    </li>
                ))
            }
            </ul>
        </nav>
    )
}


export default Pagination;