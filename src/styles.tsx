import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    Container: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 30,
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
    },
    piechart: {
        maxHeight: 200,
        maxWidth: 200,
        margin: 20,
        marginLeft: 70
    },
    graph_button: {
        color: "blue",
        margin: 5,
        marginLeft: 100,
    },
    upButtons: {
        width: "100%",
        marginLeft: 70,
    }
}));