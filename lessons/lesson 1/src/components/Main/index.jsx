const Main = () => {
  return (<main style={{
    height: "400px",
    padding: "20px",
    backgroundColor: "wheate",
    textAlign: "center",
  }}>
    <h1>Discover the Beauty of Nature</h1>
    <image style={{ top: "20px" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZ2vhLzIdtwpwXw90ZuWhngB-MdFsjD64CQ&s"
        alt="node image"
        style={{ Width: "300px", height: "300px", borderRadius: "5px" }}
      />
    </image>
    <p style={{ fontStyle: "initial" }}>Peaceful Nature</p>
  </main>
  )
}
export default Main;