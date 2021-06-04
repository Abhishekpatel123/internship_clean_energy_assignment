import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
    root: {

    }
}))
function Header() {
    const classes = useStyles();


    return (
        <Typography
            variant="h3"
            gutterBottom
            color="secondary"
            align="center"> </Typography>
    )
}

export default Header
