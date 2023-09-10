const Pagination = ({driversPerPage, totalDrivers, paginate}) => {
const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalDrivers / driversPerPage); i++) {
    pageNumbers.push(i)
}

    return (
        <nav>
            <ul>
              {
                pageNumbers.map(number =>(
                    <li key={number}>
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))
              }  
            </ul>
        </nav>
    )
};

export default Pagination;