import styled from 'styled-components';
import { HiOutlineDocument, HiOutlineDocumentDuplicate, HiOutlineDocumentRemove } from "react-icons/hi";

const Footer = (props) => {
    const { screen, changeScreen } = props;

    return (
        <Container>
            <HiOutlineDocument
                size={ 25 }
                color={ screen == 'Total' ? '#666' : '#CCC' }
                onClick={ () => { changeScreen('Total') }}
            />

            <HiOutlineDocumentDuplicate
                size={ 25 }
                color={ screen == 'Repeated' ? '#666' : '#CCC' }
                onClick={ () => { changeScreen('Repeated') }}
            />

            <HiOutlineDocumentRemove
                size={ 25 }
                color={ screen == 'Missing' ? '#666' : '#CCC' }
                onClick={ () => { changeScreen('Missing') }}
            />
        </Container>
    );
}

const Container = styled.div`
    background: #FFF;
    color: #333;
    width: 100%;
    height: auto;
    padding: 1.0rem 1.0rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    z-index: 10;
`;

export default Footer;
