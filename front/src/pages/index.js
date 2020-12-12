import { useState } from "react";
import Head from "next/head";
import BookList from "../components/BookList/BookList";
import AddBook from "../components/AddBook/AddBook";
import styles from "../../styles/styles.module.css";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={styles.navBar}>
        <h1>Estante de livros</h1>
        <h3 onClick={() => setModal(true)} className={styles.openModalText}>
          Adicionar novo livro
        </h3>
      </div>
      <BookList />
      {modal && <AddBook setModal={setModal}/>}
    </>
  );
}
