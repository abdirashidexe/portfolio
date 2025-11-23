import MainContent from "./components/MainContent"

function App() {

  return (
    <>
      {/* <MainContent/> */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0d0d0d",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
          gap: "1rem",
          padding: "0 20px"
        }}
      >
        <div style={{ fontSize: "1.8rem" }}>
          🚧 This site is under construction 🚧
        </div>

        <div style={{ fontSize: "1rem", opacity: 0.8 }}>
          You can still reach me here: <br />
          <a
            href="mailto:abdirashidahmed04@gmail.com"
            style={{ color: "#4fb3ff" }}
          >
            abdirashidahmed04@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}

export default App
