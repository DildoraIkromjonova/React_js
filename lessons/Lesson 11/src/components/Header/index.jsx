
const Header = () => {
  console.log("header re-render")
  return <div style={{
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  }}>
    <ul style={{
      listStyle: "none",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }}>
      <li>Home</li>
      <li>About</li>
      <li>Cancel</li>
    </ul>

  </div>
}

export default Header;