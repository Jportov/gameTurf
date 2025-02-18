import * as S from "./styles"


const dataAtual = new Date().getFullYear()


const Footer = () => (
    <S.FooterContainer>
        <div className="container">
            <S.FooterSection>
                <S.FooterTitle>Categorias</S.FooterTitle>
                <S.LinksFooter>
                    <li><S.FooterLink title="Clique aqui para acessar os jogos de ação" to="/categories#action">Ação</S.FooterLink></li>
                    <li><S.FooterLink title="Clique aqui para acessar os jogos de lutas" to="/categories#fight">Luta</S.FooterLink></li>
                    <li><S.FooterLink title="Clique aqui para acessar os jogos de esportes" to="/categories#sports">Esportes</S.FooterLink></li>
                    <li><S.FooterLink title="Clique aqui para acessar os jogos de simulação" to="/categories#simulation">Simulação</S.FooterLink></li>
                    <li><S.FooterLink title="Clique aqui para acessar os jogos de RPG" to="/categories#rpg">RPG</S.FooterLink></li>
                </S.LinksFooter>
            </S.FooterSection>
            <S.FooterSection>
                <S.FooterTitle>Acesso rapido</S.FooterTitle>
                <S.LinksFooter>
                <li><S.FooterLink title="Clique aqui para acessar os jogos em promoção" to="/#on-sale">Promoções</S.FooterLink></li>
                <li><S.FooterLink title="Clique aqui para acessar os jogos que serão lançados em breve" to="/#coming-soon">Em Breve</S.FooterLink></li>
                </S.LinksFooter>
            </S.FooterSection>
            <div>
                <S.CopyFooter>{dataAtual} - &copy; Game Turf todos os direitos reservados.</S.CopyFooter>
            </div>
        </div>
    </S.FooterContainer>
)


export default Footer
