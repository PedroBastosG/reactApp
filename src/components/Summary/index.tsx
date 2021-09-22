import { Container } from "./styles";
import iconImg from "../../assets/income.svg";
import outIcone from "../../assets/outcome.svg";
import total from "../../assets/total.svg"
export function Summary() {

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconImg}></img>
                </header>
                <b>R$ 1800,00</b>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outIcone}></img>
                </header>
                <b>R$ 50,00</b>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={total}></img>
                </header>
                <b>R$750,00</b>
            </div>
        </Container>
    )
}