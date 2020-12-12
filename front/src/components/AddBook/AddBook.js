import { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { getAuthorsQuery, addBookMutation } from "../../graphql/Query";
import styles from "./styles.module.css";

function AddBook({ getAuthorsQuery: { authors }, addBookMutation, setModal }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthor] = useState("");

  const handleSubmit = () => {
    addBookMutation({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
      },
    });
  };

  if (!authors) {
    return <>Carregando...</>;
  }

  return (
    <div className={styles.container}>
      <button onClick={() => setModal(false)} className={styles.buttonClose}>
        Fechar
      </button>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o name do livro"
        />
        <label className={styles.label}>Genre</label>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Digite o gênero do livro"
        />
        <label className={styles.label}>Author</label>
        <select
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.select}
        >
          <option selected disabled>
            Selected a author
          </option>
          {authors.map((item) => (
            <>
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            </>
          ))}
        </select>
        <button typw="submit" className={styles.button}>
          Adicionar Livro
        </button>
      </form>
    </div>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
