import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        padding: "10px 20px",
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/programming">🅿rogramming</Link>
      <Link to="/spreadsheet">Spreadsheet</Link>
    </nav>
  );
}