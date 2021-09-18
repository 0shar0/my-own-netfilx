import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles(theme=>({
    rootButton: {
        backgroundColor: theme.palette.primary.main,
        height: 40,
        margin: theme.spacing(5, 0),
        color: theme.palette.primary.white,
        fontWeight: 600,
        '&:hover': {
            backgroundColor: theme.palette.primary.black,
        },
    },
}))
