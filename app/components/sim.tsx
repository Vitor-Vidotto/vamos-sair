"use client"
import React from "react";
import Image from "next/image";

const SimPage = () => {
  return (
    <div style={styles.container}>
      <Image
        src="https://31.media.tumblr.com/d3b5f0fd7426882132233e430a0f8c43/tumblr_msyxi24JKz1rgp9bio1_500.gif"
        alt="Cute GIF"
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
