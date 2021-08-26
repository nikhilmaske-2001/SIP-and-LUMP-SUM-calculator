import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    Container: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 95,
    },
    root: {
        minWidth: 350,
        minHeight: 550,
    },
    Box: {
        display: "flex",
        marginBottom: 20,
    },
    Button: {
        marginTop: 20,
    },
    Total: {
        marginTop: 40,
    }
}));