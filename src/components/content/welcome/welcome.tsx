import welcome from "../../../assets/images/login-key-flat-isometric_126523-1865.jpg"
import {makeStyles, useTheme} from "@material-ui/core/styles"
import {Grid, Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    item: {
        margin: theme.spacing(2),
    },
    img: {
        width: "100%",
    },
}))

export const Welcome = () => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.item} sm={3}>
                <img className={classes.img} src={welcome} alt="welcome"/>
            </Grid>
            <Grid item className={classes.item} sm={8}>
                <Typography variant={"h4"}>
                    Добрый день!
                </Typography>
                <br/>
                <Typography variant={"h6"}>
                    Приветствую вас на моём презентационном сайте. Здесь предусмотренна авторизация пользователя через email и пароль.
                    Но не беспокойтесь, регистрироваться не придётся, достаточно просто подтвердить уже введённые данные в Login форме.
                    После этого вкладка Dialogs будет доступной (без входа произойдёт перенаправление на эту страницу).
                    <br/>
                    <br/>
                    Кроме того, рядом с кнопкой Login, есть возможность сменить тему с тёмной на светлую.
                </Typography>
            </Grid>
        </Grid>
    )
}