import numeral from 'numeral'
import React from 'react'
import "../Table.css"
/**
* @author
* @function Table
**/

const Table = ({countries}) => {
  return(
    <div className="table">
        {
            countries.map(({country,cases})=>(
                <tr>
                    <td>{country}</td>
                    <td>
                        <strong>{cases}</strong>
                    </td>
                </tr>
            ))
        }
    </div>
   )

 }

export default Table