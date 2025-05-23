import Button from "../button";
import Styles from "./welcome.module.scss"

const Welcome = () => {
    return (
        <section className={Styles.container}>
            <div className={Styles.text}>
                <h1>Melhor agência de marketing do bairro</h1>

                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>

                <Button title="Aumentar vendas" kind="secundary"/>
            </div>
            <div className={Styles.image}></div>
        </section>
    );
}

export default Welcome;