"use client"
import React from "react";
import Image from "next/image";

const SimPage = () => {
  return (
    <div style={styles.container}>
      <Image
        src="/gif2.gif"
        alt="Cute GIF"
        width={600}   // Defina uma largura inicial
        height={400} 
        style={styles.gifImage}
      />
      <h1 style={styles.header}>Você disse sim!!!! 💖</h1>
      <p style={styles.paragraph}>Te busco assim que você falar que posso ir! 😍</p>
      <div style={styles.buttonContainer}></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const, // Garantir que 'flexDirection' seja tratado como valor literal
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9e3e3",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center" as const, // Adicionando 'as const' em 'textAlign'
  },
  header: {
    fontSize: "2.5em",
    color: "#d32f2f",
  },
  paragraph: {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "20px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.5em",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  },
  gifImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  },
};

export default SimPage;
