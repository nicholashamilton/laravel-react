import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <Link
                    to=""
                    className="mr-4 text-lg font-medium"
                >
                    Home
                </Link>
                <Link
                    to="/login"
                    className="mr-4 text-lg font-medium"
                >
                    Login
                </Link>
            </nav>
        </header>
    );
}
