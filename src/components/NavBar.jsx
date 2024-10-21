import logo from "../assets/logo_rb.png"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"

export const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={logo} alt="logo"></img>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            {/* Lien vers LinkedIn */}
            <a href="https://www.linkedin.com/in/lanad-anis-708821303/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            {/* Lien vers GitHub */}
            <a href="https://github.com/AnisLanad" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            {/* Lien vers Instagram */}
            <a href="https://www.instagram.com/anis.dev/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            {/* Lien vers Twitter/X */}
            <a href="https://twitter.com/ton-profil-twitter" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}
