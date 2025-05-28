import Button from "../button";
import Input from "../input";
import Select from "../select";
import Styles from "./contato.module.scss";
import Link from "next/link";

const Contato = () => {
    return (
        <section className={Styles.container}>
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>

                <h2>Aumente seu resultado de vendas e performance</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={Styles.form}>
                <h3>Fale com um especialista</h3>

                <form action="">
                    {/* required, exige o preenchimento do campo */}
                    <Input type="text" placeholder="Nome completo" required />

                    <Input type="email" name="" id="" placeholder="E-mail profissional" required />

                    <Input type="number" name="" id="" placeholder="Celular/Whatsapp" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" required />

                    <Input type="text" placeholder="Site" required />

                    <Select placeholder="Orçamento para mídia" options={[
                        { label: "Instagram", value: "instagram" },
                        { label: "Facebook", value: "facebook" }
                    ]} required />

                    <Button title="Enviar" kind="full" />

                </form>

            </div>
            <div className={Styles.footer}>
                <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <Link href="/"><span>Política de Privacidade</span>.</Link></p>
            </div>
        </section>
    );
}

export default Contato;