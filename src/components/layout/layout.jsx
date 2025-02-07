import React from "react";
import Container from "../container/container";
import Header from "../pages/Header";
import styles from "../layout/layout.module.css";
import Navbar from "../pages/Navbar";

function Layout() {
  return (
    <main className={`${styles.main} relative`}>
      <Container>
        <Navbar />
        <Header />
        <Header />
      </Container>
    </main>
  );
}

export default Layout;
