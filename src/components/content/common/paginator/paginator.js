import styles from "./paginator.module.css";
import {useState} from "react";
import {Button, IconButton} from "@material-ui/core";
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    const [portionNumber, setPortionNumber] = useState(1);

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = Array.from({length: pagesCount}, (_, k) => k + 1);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            { portionNumber > 1 &&
            <div>
                <IconButton onClick={() => { setPortionNumber(1)}}>
                    <FirstPageIcon/>
                </IconButton>
                <IconButton onClick={() => { setPortionNumber(portionNumber - 1) }}>
                    <NavigateBeforeIcon/>
                </IconButton>
            </div>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p =>
                    <Button key={p} className={currentPage === p ? styles.selectedPage : null}
                            onClick={() => onPageChanged(p)}
                    >{p}</Button>
                )
            }
            {
                portionCount > portionNumber &&
                <div>
                    <IconButton onClick={() => { setPortionNumber(portionNumber + 1) }}>
                        <NavigateNextIcon/>
                    </IconButton>
                    <IconButton onClick={() => { setPortionNumber(portionCount)}}>
                        <LastPageIcon/>
                    </IconButton>
                </div>
            }
        </div>
    );
};