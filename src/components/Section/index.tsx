import * as S from "./styles"

export type Props = {
	title: string
	background?: 'black' | 'gray'
	children?: React.ReactNode

} 






const Section = ({title, background, children}: Props) => (
	<S.SectionContainer background={background}>
		<div className="container">
		<S.TitleSection>{title}</S.TitleSection>
		{children}
		</div>
	</S.SectionContainer>
)

export default Section