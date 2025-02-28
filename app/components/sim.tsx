"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importando o framer-motion para animações suaves

const SimPage = () => {
  const [gifIndex, setGifIndex] = useState(0);
  const [bgColor, setBgColor] = useState("#f9e3e3");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const gifs = [
    "/gif2.gif",  // Adicione mais GIFs se necessário
    "/gif24.gif",
    "/gif23.gif",
    "/gif22.gif",
  ];

  useEffect(() => {
    // Inicializa o áudio assim que o componente for montado
    const celebrationSound = new Audio("/celebration-sound.mp3");
    celebrationSound.loop = true;  // Configura o áudio para tocar em loop
    celebrationSound.play();  // Inicia a reprodução do som
    setAudio(celebrationSound);

    return () => {
      // Limpa o áudio quando o componente for desmontado
      celebrationSound.pause();
      celebrationSound.currentTime = 0;
    };
  }, []); // O efeito só é executado uma vez, ao carregar a página

  const handleGifChange = () => {
    setGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    setBgColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <div style={{ ...styles.container, backgroundColor: bgColor }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.gifContainer}
      >
        <Image
          src={gifs[gifIndex]}
          alt="Cute GIF"
          width={600}
          height={400}
          style={styles.gifImage}
        />
      </motion.div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.header}
      >
        Você disse sim!!!! 💖
      </motion.h1>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.paragraph}
      >
        Te busco assim que você falar que posso ir! 😍
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.buttonContainer}
      >
        <motion.button
          style={styles.button}
          onClick={handleGifChange}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Trocar GIF e fundo
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.buttonContainer}
      >
        <motion.a
          href="/"
          style={styles.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Voltar
        </motion.a>
      </motion.div>
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
    fontSize: "3em",
    color: "#d32f2f",
    marginTop: "20px",
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

export default SimPage;
