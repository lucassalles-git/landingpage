import Styles from "./footer.module.scss"
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import IconInstagram from "../../public/images/Icon awesome-instagram.svg";
import IconFacebook from "../../public/images/Icon awesome-facebook-f.svg";
import IconLinkedin from "../../public/images/Icon awesome-linkedin.svg";
import IconYoutube from "../../public/images/Icon awesome-youtube.svg";

const Footer = () => {
    return (
        <div className={Styles.container}>
            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image src={Logo} alt="Logo"/>
                <h3 className={Styles.title}>0800 800 800</h3>
                <p>comercial@agencia.com.br</p>
            </div>

            <div className={Styles.column}>
                <h3>MENU</h3>
                <p>Quem somos </p>
                <p>Cases</p>
            </div>

            <div className={Styles.column}>
                <h3>CONTEÚDO</h3>
                <p>E-books </p>
                <p>Fórmulas prontas</p>
            </div>

            <div className={`${Styles.column} ${Styles.alignRight}`}>
                <h3>SOCIAL</h3>

                <div className={Styles.icons}>
                    
                    <Link href="/">
                    <Image src={IconInstagram} alt="Icon" className={Styles.icon}/>
                    </Link>
                    <Link href="/">
                    <Image src={IconFacebook} alt="Icon" className={Styles.icon}/>
                    </Link>
                    <Link href="/">
                    <Image src={IconLinkedin} alt="Icon" className={Styles.icon}/>
                    </Link>
                    <Link href="/">
                    <Image src={IconYoutube} alt="Icon" className={Styles.icon}/>
                    </Link>
                </div>
            </div>

            <div className={Styles.allRightReserved}>
                <p>©2022 AGENCIA - Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;