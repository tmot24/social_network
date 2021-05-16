import React, {useState} from "react";
import {Button, IconButton} from "@material-ui/core";
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
    }
})

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number,
}

export const Paginator: React.FC<PropsType> = ({
                                               totalItemsCount,
                                               pageSize,
                                               currentPage,
                                               onPageChanged,
                                               portionSize = 10
                                           }) => {
    const [portionNumber, setPortionNumber] = useState(1);
    const classes = useStyles()

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages: number[] = Array.from({length: pagesCount}, (_, k) => k + 1);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.root}>
            {portionNumber > 1 &&
            <div>
                <IconButton onClick={() => {
                    setPortionNumber(1)
                }}>
                    <FirstPageIcon/>
                </IconButton>
                <IconButton onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>
                    <NavigateBeforeIcon/>
                </IconButton>
            </div>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => (p === currentPage)
                        ? <Button key={p} variant={"outlined"}
                                  onClick={() => onPageChanged(p)}
                        >{p}</Button>
                        : <Button key={p} onClick={() => onPageChanged(p)}>{p}</Button>
                    )
            }
            {
                portionCount > portionNumber &&
                <>
                    <IconButton onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>
                        <NavigateNextIcon/>
                    </IconButton>
                    <IconButton onClick={() => {
                        setPortionNumber(portionCount)
                    }}>
                        <LastPageIcon/>
                    </IconButton>
                </>
            }
        </div>
    );
};