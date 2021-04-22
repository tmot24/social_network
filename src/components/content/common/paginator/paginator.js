import styles from "./paginator.module.css";

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = Array.from({length: pagesCount}, (_, k) => k + 1);

    return (
        <div>
            {
                pages.map(p =>
                    <button key={p} className={currentPage === p ? styles.selectedPage : null}
                            onClick={() => onPageChanged(p)}
                    >{p}</button>
                )
            }
        </div>
    );
};