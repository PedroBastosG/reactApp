import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


export function Header(){
    return(
        <Container>
            <Content > 
            <img src={logoImg} alt="dtmoney"></img>
            <button type="button">
                Transação
            </button>
            </Content>
        </Container>
    )
}