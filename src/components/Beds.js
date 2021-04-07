import { Card, CardContent, Link } from '@material-ui/core'
import React from 'react'
import "../Table.css"
/**
* @author
* @function Beds
**/

const Beds = (props) => {
  return(
      <>
      <Card>
            <CardContent style={{flex:1, width:'700px'}} >
          <div  style={{color:'black',fontSize:"large"}}>
        What are the steps to get the vaccine?
    </div><hr></hr>
    
    <div>
        Please go through this link! <br></br>
<Link>https://pharmeasy.in/blog/want-to-get-the-covid-19-vaccine-check-the-step-wise-procedure/</Link>
    
  </div>
              </CardContent>
     

      </Card>
   
    </>
   )

 }

export default Beds