/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importando o framer-motion para animações suaves

const Pergunta = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [fontSize, setFontSize] = useState(1.5);
  const [attempts, setAttempts] = useState(10);
  const [gifIndex, setGifIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#f9e3e3");

  const messages = [
    "Não! 😱 (tem certeza?)",
    "Certeza certa? 🤔",
    "Certeza absoluta? 😅",
    "Por favor pequena... 😇",
    "Pensa um pouquinho vai 🧠",
    "Se você disser não vou ficar muito triste... 😢",
    "Triste borocochó... 😞",
    "Vai fazer isso mesmo... 😬",
    "Vou ter que te seduzir!",
    "BRINCADEIRA, DIZ SIM! ❤️🥰",
  ];

  const gifs = [
    "/gif1.gif",
    "/gif3.gif",
    "/gif4.gif",
    "/gif5.gif",
    "/gif6.gif",
    "/gif7.gif",
    "/gif8.gif",
    "/gif9.gif",
    "/gif11.gif",
    "/gif10.gif",
  ];

  const handleClickSound = () => {
    const sound = new Audio("/click-sound.mp3");
    sound.play();
  };

  const handleNoClick = () => {
    if (attempts > 1) {
      setAttempts(attempts - 1);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setFontSize((prevSize) => prevSize * 1.35);
      setGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
      setBgColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    } else {
      setMessageIndex(messages.length - 1);
      setFontSize(2);
    }
    handleClickSound();
  };

  const handleYesClick = () => {
    handleClickSound();
    window.location.href = "/sim"; // Redireciona para a página /sim
  };

  return (
    <div style={{ ...styles.container, backgroundColor: bgColor }}>
      <div style={styles.gifContainer}>
        <Image
          src={gifs[gifIndex]}
          width={400}
          height={200}
          alt="Cute GIF"
          style={styles.gifImage}
        />
      </div>
      <h1 style={styles.header}>Quer sair comigo?</h1>
      <h2 style={{ color: "#d32f2f" }}>Tentativas restantes: {attempts}</h2>
      <div style={styles.buttons}>
        <motion.button
          style={styles.yesButton(fontSize)}
          onClick={handleYesClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          SIM!
        </motion.button>
        <motion.button
          style={styles.noButton}
          onClick={handleNoClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {messages[messageIndex]}
          </motion.div>
        </motion.button>
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
    fontFamily: "'Arial', sans-serif",
    flexDirection: "column" as const, // Corrigido com 'as const'
  },
  header: {
    fontSize: "2.5em",
    color: "#d32f2f",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  yesButton: (fontSize: number) => ({
    fontSize: `${fontSize}em`,
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  }),
  noButton: {
    fontSize: "1.5em",
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s ease, background-color 0.2s ease",
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
