import { useRef } from "react";

import "../App.css";
import Logo from "../img/logo.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3><img src={Logo} className="logo-nav" alt="" /></h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
                <button className="nav-btn nav-close-btn"
					onClick={showNavbar}>
            
            </button>
			</nav>
            <button className="nav-btn" onClick={showNavbar}>
        <i class="fa-solid fa-bars"></i>
        </button>
		</header>
	);
}

export default Navbar;