import Button from "../button";
import Styles from "./welcome.module.scss"
import BannerWelcome from "../../public/images/bannerWelcome.svg"
import Image from "next/image";

const Welcome = () => {
    return (
        <section className={Styles.container}>
            <div className={Styles.text}>
                <h1>Melhor agência de marketing do bairro</h1>

                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>

                <Button title="Aumentar vendas" kind="secundary"/>
            </div>
            <div className={Styles.image}>
                <Image src={BannerWelcome} alt="Banner Welcome"/>
            </div>
        </section>
    );
}

export default Welcome;