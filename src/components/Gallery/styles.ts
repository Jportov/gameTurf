import styled from 'styled-components';
import { colors } from '../../styles';


export const GalleryList = styled.ul`

display:flex;
flex-wrap: wrap;
gap: 16px;


`
export const Action = styled.div`

position: absolute; 
top:0; 
left: 0;
width: 100%;
height:100%;
background-color: rgba(0,0,0,0.73);
display:flex;
align-items:center;
justify-content: center;
opacity:0;
transisiotn: opacity 5s ease; 
`


export const GalleryItem = styled.li`
position: relative;
cursor: zoom-in;
    > img {
border: 2px solid ${colors.softWhite};
border-radius: 8px;
width: 150px;
height: 150px;  
object-fit: cover;

}  &:hover {

        ${Action} {
        opacity:1;
        transisiotn: opacity 5s ease; 
        }
}

`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    &.visivel {
        display: flex;
    }

    .overlay { 
        position: absolute; 
        top: 0; 
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`
export const ModalContent = styled.div`
    position:relative;
    z-index: 1;
    max-width: 960px;

        header { 
            display:flex;
            margin-bottom: 24px;
            justify-content: space-between;
    
    }

    .cloneBtn {
        height: 16px;
        width: 16px;
        cursor: pointer;
        
        }



    h4 {
        font-size: 18px;
        font-weight: bold;
    }
    
    > img {
        width: 100%;
        object-fit: cover;
        
    }
    img, iframe
    {
        display:block;
        max-width: 100%;
        
    }
        
    iframe {
        width: 100%;
        height: 500px;
    }
        

`