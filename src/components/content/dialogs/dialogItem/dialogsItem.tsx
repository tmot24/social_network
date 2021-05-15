import {NavLink} from "react-router-dom";
import {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";

type DialogsItemPropsType = {
    name: string,
    id: number,
    img: string
}

const useStyle = makeStyles({
    img: {
        height: 100,
    }
})

export const DialogItem: FC<DialogsItemPropsType> = ({name, id, img}) => {
    const classes = useStyle()
    return (
        <div>
            <img className={classes.img} src={img} alt="avatar"/>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
};