import { useState } from 'react';
import Section from "../Section";

import * as S from "./styles";

import iconeFechar from "../../assets/images/fechar.png";
import iconePlay from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";





type Props = {

    defaultImage: string
    name: string
    items: GalleryItemProps[]
}

interface ModalState extends GalleryItemProps {
        isVisible: boolean


}

const Gallery = ({defaultImage, name, items}: Props) => {
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        type: 'image',
        url:''    })

    const getMediaIcon = (item: GalleryItemProps) => {

        if(item.type === 'image') return zoom
        return iconePlay
    }

    const getMediaCover = (item: GalleryItemProps) => {

        if(item.type === 'image') return item.url
        return defaultImage
    }



    const  closeModal = () => {

        setModal({
            isVisible: false,
            type: 'image',
            url:''
        })

    }




return (
    <Section title="Galeria " background="black">
        <S.GalleryList>
            {items.map((media, index) => (
                    <S.GalleryItem key={media.url}  onClick={() => {setModal({
                        isVisible:true,
                        type: media.type,
                        url: media.url
                    });
                    }} >
                    <img src={getMediaCover(media)} alt={`Media ${index + 1} do ${name}`} />
                    <S.Action>
                    <img src={getMediaIcon(media)} alt="Clique para maximar a midia." />
                    </S.Action>
                    </S.GalleryItem>))}
        </S.GalleryList>

            <S.Modal className={modal.isVisible ? 'visivel' : ''}>
                <S.ModalContent className="container">
                    <header>
                        <h4>{name}</h4>
                        <img src={iconeFechar} className='cloneBtn' alt="Botao para fechar" onClick={() => {
                        closeModal()
                        }} />
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url} alt='Imagem modal' />
                    ) : (
                        <iframe  frameBorder={0} src={modal.url} title="Video" />
                    )}
                </S.ModalContent>
                <div className="overlay"   onClick={() => {
                        closeModal()
                        }}></div>
            </S.Modal>


        </Section>
  );
}


export default Gallery
