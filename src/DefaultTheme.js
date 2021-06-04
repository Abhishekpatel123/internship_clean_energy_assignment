import { createMuiTheme } from "@material-ui/core";
import {  teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        secondary :teal
    },
    overrides : {
        MuiButton : {
            root : {
                borderRadius : '12px',
            }
        }
    }
})

export default theme;