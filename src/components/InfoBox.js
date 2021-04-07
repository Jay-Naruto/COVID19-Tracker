import { Card,CardContent,Typography } from '@material-ui/core'
import React from 'react'
import "../InfoBox.css"
/**
* @author
* @function InfoBox
**/

const InfoBox = ({title,cases,total}) => {
  return(
    <Card className="info">
    <CardContent>
        {/* {title} */}
        <Typography className="infoBox__title" color="textSecondary">
            {title}
        </Typography>

        {/* {cases} */}
        <h2 className="infoBox__cases" >{cases}</h2>

        {/* {total} */}
        <Typography className="infoBox__total" color="textSecondary">
            {total} Total
        </Typography>

    </CardContent>
    </Card>
   )

 }

export default InfoBox