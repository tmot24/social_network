import {LinearProgress} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

export const Preloader = () => {
    const theme = useTheme();

    return (
        <LinearProgress style={{
            backgroundColor: "#303030",
            marginBottom: theme.spacing(2),
        }}/>
    );
};