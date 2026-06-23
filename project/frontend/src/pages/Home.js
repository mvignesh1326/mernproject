import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to MyApp 🎉</h1>

        <p style={styles.text}>
          This is a colorful home page created using React.
        </p>

        <div style={styles.cards}>
          <div style={styles.card1}>
            <h2>🚀 Features</h2>
            <p>Explore amazing features.</p>
          </div>

          <div style={styles.card2}>
            <h2>📚 Learn</h2>
            <p>Improve your coding skills.</p>
          </div>

          <div style={styles.card3}>
            <h2>🌍 Connect</h2>
            <p>Meet developers worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginLeft: "240px",
    minHeight: "100vh",
    padding: "40px",
    background:
      "linear-gradient(to right, #ff9a9e, #fad0c4, #a18cd1)",
  },

  heading: {
    color: "white",
    fontSize: "40px",
    textAlign: "center",
  },

  text: {
    color: "white",
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "40px",
  },

  cards: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
  },

  card1: {
    background: "#ff6b6b",
    padding: "25px",
    borderRadius: "15px",
    color: "white",
    width: "250px",
    textAlign: "center",
  },

  card2: {
    background: "#4ecdc4",
    padding: "25px",
    borderRadius: "15px",
    color: "white",
    width: "250px",
    textAlign: "center",
  },

  card3: {
    background: "#f7b731",
    padding: "25px",
    borderRadius: "15px",
    color: "white",
    width: "250px",
    textAlign: "center",
  },
};

export default Home;