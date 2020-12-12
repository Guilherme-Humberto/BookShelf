import { graphql } from "react-apollo";
import { getBooksQuery } from "../../graphql/Query";
import styles from "./styles.module.css";

function BookList({ data: { books } }) {
  if (!books) {
    return <>Carregando...</>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {books.map((item) => (
          <div className={styles.card}>
            <div>
              <p className={styles.titleCard}>Sobre o livro</p>
              <p className={styles.info}>
                <strong>Name:</strong> {item.name}
              </p>
              <p className={styles.info}>
                <strong>Genre:</strong> {item.genre}
              </p>
            </div>
            <hr />
            <div>
              <p className={styles.titleCard}>Sobre o autor</p>
              <p className={styles.info}>
                <strong>Name:</strong> {item.author.name}
              </p>
              <p className={styles.info}>
                <strong>Age:</strong> {item.author.age}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
