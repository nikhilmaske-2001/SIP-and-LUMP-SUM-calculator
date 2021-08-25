import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    Container: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 100,
    },
    root: {
        minWidth: 275,
        maxWidth: 550,
    },
    Box: {
        display: "flex",
        marginBottom: 20,
    }
}));