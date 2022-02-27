import styles from './list.module.scss';

/* eslint-disable-next-line */
export interface ListProps {
  list: string[];
}

export function List(props: ListProps) {
  const { list } = props;
  return (
    <ul className={styles.list}>
      {list.map((l) => {
        return (
          <li className={styles.listItem} key={l}>
            <span className={styles.listIcon}>
              <ion-icon name="checkmark-outline"></ion-icon>
            </span>
            <span>{l}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
