import Image from "next/image"; //importe da imagem
import Link from "next/link"; //import dos links
import Logo from "../../public/images/logo.svg"; //import da logo
import Styles from "./header.module.scss" //import dos estilos

const Header = () => {
    return (
        // Chamando os estilos
        <div className={Styles.container}>
            <div className={Styles.logotipo}>
                <Image src={Logo} alt="Logo"/>
            </div>
            <nav className={Styles.menu}>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
            </nav>
            <div className={Styles.action}>
                <button className={Styles.button}>Fale conosco</button>
            </div>
        </div>
    )
}

export default Header;