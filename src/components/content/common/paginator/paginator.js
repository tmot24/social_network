import styles from "./paginator.module.css";
import {useState} from "react";

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let [portionNumber, setPortionNumber] = useState(1);

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = Array.from({length: pagesCount}, (_, k) => k + 1);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            { portionNumber > 1 &&
            <div>
                <button onClick={() => { setPortionNumber(1)}}>First</button>
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>
            </div>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p =>
                    <button key={p} className={currentPage === p ? styles.selectedPage : null}
                            onClick={() => onPageChanged(p)}
                    >{p}</button>
                )
            }
            {
                portionCount > portionNumber &&
                <div>
                    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
                    <button onClick={() => { setPortionNumber(portionCount) }}>Last</button>
                </div>
            }
        </div>
    );
};