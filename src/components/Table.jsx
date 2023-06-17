import React from 'react'
import TableItems from './TableItems'
import PaginationBar from './PaginationBar'

const Table = () => {
    return <>
        <table class="table table-striped-coloums">
            <thead>
                <tr>
                <th scope="col">No.</th>
                <th scope="col">Title</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <TableItems/>

            </tbody>
        </table>
        <PaginationBar/>
    
    </>
}

export default Table