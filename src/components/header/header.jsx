import Link from 'next/link';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">VietPassion</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">About Us</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Contact Us</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn btn-outline-primary me-3">
                                Sign In
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="btn btn-primary">
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;