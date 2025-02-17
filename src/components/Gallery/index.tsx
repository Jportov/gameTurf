import { useState } from 'react';
import Section from "../Section";

import { Action, GalleryItem, GalleryList, Modal, ModalContent } from "./styles";

import iconeFechar from "../../assets/images/fechar.png";
import iconePlay from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";
import { GalleryItemProps } from '../../Pages/Home';




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
        <GalleryList>
            {items.map((media, index) => (
                    <GalleryItem key={media.url}  onClick={() => {setModal({
                        isVisible:true,
                        type: media.type,
                        url: media.url
                    });
                    }} >
                    <img src={getMediaCover(media)} alt={`Media ${index + 1} do ${name}`} />
                    <Action>
                    <img src={getMediaIcon(media)} alt="Clique para maximar a midia." />
                    </Action>              
                    </GalleryItem>))}   
        </GalleryList>  
        
            <Modal className={modal.isVisible ? 'visivel' : ''}>
                <ModalContent className="container">
                    <header>
                        <h4>{name}</h4>
                        <img src={iconeFechar} alt="Botao para fechar" onClick={() => {
                        closeModal()
                        }} />
                    </header>
                    {modal.type === 'image' ? (
                        <img src={modal.url} />
                    ) : (
                        <iframe  frameBorder={0} src={modal.url} title="Video" />
                    )}
                </ModalContent>
                <div className="overlay"   onClick={() => {
                        closeModal()
                        }}></div>
            </Modal>
        
        
        </Section>
  );
}


export default Gallery
