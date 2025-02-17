import { CopyFooter, FooterContainer, FooterLink, FooterSection, LinksFooter, TituloFooter } from "./styles"


const dataAtual = new Date().getFullYear()

    
const Footer = () => (
    <FooterContainer>   
        <div className="container">
            <FooterSection>
                <TituloFooter>Categorias</TituloFooter>
                <LinksFooter>
                    <li><FooterLink to="/categories#action">Ação</FooterLink></li>
                    <li><FooterLink to="/categories#fight">Luta</FooterLink></li>
                    <li><FooterLink to="/categories#sports">Esportes</FooterLink></li>
                    <li><FooterLink to="/categories#simulation">Simulação</FooterLink></li>
                    <li><FooterLink to="/categories#rpg">RPG</FooterLink></li>
                </LinksFooter>
            </FooterSection>
            <FooterSection>
                <TituloFooter>Acesso rapido</TituloFooter>
                <LinksFooter> 
                <li><FooterLink to="/#on-sale">Promoções</FooterLink></li>
                <li><FooterLink to="/#coming-soon">Em Breve</FooterLink></li> 
                </LinksFooter>
            </FooterSection>
            <div>
                <CopyFooter>{dataAtual} - &copy; Game Turf todos os direitos reservados.</CopyFooter>
            </div>
        </div>
    </FooterContainer>
)


export default Footer