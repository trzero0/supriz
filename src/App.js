import { useState, useEffect } from "react";

export default function App() {
  const [heartPos, setHeartPos] = useState({ top: 100, left: 100 });
  const [caught, setCaught] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (caught) return;
    const interval = setInterval(() => {
      const top = Math.random() * (windowSize.height - 100);
      const left = Math.random() * (windowSize.width - 100);
      setHeartPos({ top, left });
    }, 500);
    return () => clearInterval(interval);
  }, [windowSize, caught]);

  const handleClick = () => setCaught(true);

  return (
    <div style={styles.container}>
      {!caught && (
        <>
          <div style={styles.textContainer}>
            <h1 style={styles.title}>Kalbi Yakala! ❤️</h1>
            <p style={styles.subtitle}>Hadi tıkla! 🖱️</p>
          </div>
          <div
            onClick={handleClick}
            style={{
              ...styles.heart,
              top: heartPos.top,
              left: heartPos.left,
            }}
          >
            ❤️
          </div>
        </>
      )}
      {caught && (
  <div style={styles.loveContainer}>
    <h1 style={styles.loveMessage}>🎉 Seni seviyorum ❤️</h1>
    <img
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXFnZGdwbDdzZXB3cHJ3dTZ4NTl6YjYxd2N1ZzdpdW14ZzVmcTYzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
      alt="Komik kedi"
      style={styles.catImage}
    />
  </div>
)}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#ffe4e1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexDirection: "column",
    textAlign: "center",
  },
  textContainer: {
    zIndex: 10,
    marginBottom: "20px",
  },
  title: {
    fontSize: "3rem",
    color: "#800080",
    margin: 0,
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#4b0082",
    margin: 0,
  },
  heart: {
    position: "absolute",
    fontSize: "4rem",
    cursor: "pointer",
    transition: "top 0.2s, left 0.2s",
  },
  loveContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  loveMessage: {
    fontSize: "4rem",
    color: "#ff0000",
    animation: "pulse 1s infinite",
  },
  catImage: {
    width: "200px",
    borderRadius: "12px",
  },
};
