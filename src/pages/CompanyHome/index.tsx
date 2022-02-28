import { Link } from "react-router-dom";

export default function CompanyHome() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Company Home</h2>
            <Link to="/">Start Page</Link>
        </main>
    );
}