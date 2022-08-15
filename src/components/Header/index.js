import styled from 'styled-components';

const Header = (props) => {
    const { totalStickers, repeatedStickers, missingStickers } = props;

    return (
        <Container>
            <h1>Panini™ - Copa do Mundo 2022</h1>
            <p>Total: { totalStickers } | Repetidas: { repeatedStickers } | Faltantes: { missingStickers }</p>

            <hr />
        </Container>
    )
}

const Container = styled.div`
    color: #333;
    width: 100%;
    height: auto;
    padding: 1.0rem 1.0rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    h1 {
        color: #666;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
    }

    hr {
        border-top: solid 1px #DDD;
        margin-top: 1.0rem;
    }


`;

export default Header;
