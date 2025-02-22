"use client";
import { useState } from "react";
import Image from "next/image";

const Pergunta = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [fontSize, setFontSize] = useState(1.5);

  const messages = [
    "Não! (tem certeza?)",
    "Certeza certa?",
    "Certeza absoluta?",
    "Por favor pequena...",
    "Pensa um pouquinho vai",
    "Se você disser não vou ficar muito triste...",
    "Triste borocochó...",
    "Vai fazer isso mesmo...",
    "Okay, vou parar de insistir...",
    "BRINCADEIRA, DIZ SIM! ❤️",
  ];

  const handleNoClick = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setFontSize((prevSize) => prevSize * 1.45); // Aumenta o tamanho do botão "Sim"
  };

  const handleYesClick = () => {
    window.location.href = "/sim"; // Redireciona para a página /sim
  };

  return (
    <div style={styles.container}>
      <div style={styles.gifContainer}>
        <Image
          src="/gif1.gif"
          width={400}   // Defina uma largura inicial
          height={200} 
          alt="Cute GIF"
          style={styles.gifImage}
        />
      </div>
      <h1 style={styles.header}>Quer sair comigo?</h1>
      <div style={styles.buttons}>
        <button style={styles.yesButton(fontSize)} onClick={handleYesClick}>
          SIM!
        </button>
        <button style={styles.noButton} onClick={handleNoClick}>
          {messages[messageIndex]}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    backgroundColor: "#f9e3e3",
    fontFamily: "'Arial', sans-serif",
    flexDirection: "column" as const, // Corrigido com 'as const'
  },
  header: {
    fontSize: "2.5em",
    color: "#d32f2f",
  },
  buttons: {
    marginTop: "20px",
  },
  yesButton: (fontSize: number) => ({
    fontSize: `${fontSize}em`,
    padding: "10px 20px",
    marginRight: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  noButton: {
    fontSize: "1.5em",
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  gifContainer: {
    marginTop: "20px",
  },
  gifImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  },
};

export default Pergunta;
