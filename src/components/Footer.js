import styled from "styled-components";

export default function Footer() {
    return (
        <>
            <Container>
                <Title>Recap League of Legends</Title>
                <Description>
                    <h2>Powered by:
                        <a href="https://github.com/alvarmiguelmart"> Alvaro Miguel</a>
                        ,
                        <a href="https://github.com/aryanneacosta"> Aryanne Acosta</a> 
                        ,
                        <a href="https://github.com/fehacdev"> Felipe Cardoso </a> 
                        & 
                        <a href="https://github.com/Thalita-mangini"> Thalita Mangini</a>
                    </h2>
                </Description>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-family: 'Aboreto', cursive;
    margin-bottom: 15px;
`;

const Description = styled.div`
    color: white;
    font-size: 10px;
    font-family: 'Aboreto', cursive;

    a {
        color: white;
    }

    @media (max-width: 480px) {
        font-size: 8px;
    }
`;