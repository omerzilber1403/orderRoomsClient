import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
});

export default makeStyles(() => ({
    root: {
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
        backgroundColor: "#EFEFEF",
    },
    text: {
        padding: "2%",
        fontSize: "50",
    },
    button: {
        width: "80%",
        height: "100%",
    },
    textItem: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: "10%",
    },
    item: {
        padding: "5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10%",
        height: "30%",
        [theme.breakpoints.down("tablet")]: {
            height: "20%",
        },
    },
    AutocompleteItem: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "10%",
        height: "30%",
        [theme.breakpoints.down("tablet")]: {
            height: "20%",
        },
    },
}));
