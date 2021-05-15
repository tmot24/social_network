import welcome from "../../../assets/images/welcome-home-welcome-home-de.jpg";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        height: "80vh",
    }
});

export const Welcome = () => {
    const classes = useStyles();

    return (
        <div>
            <img className={classes.root} src={welcome} alt="welcome"/>
        </div>
    );
};