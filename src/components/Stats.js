import { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import bg from './../assets/bg.png';
import recapButton from './../assets/recapButton.png';
import box from './../assets/box.png';
import { useNavigate } from "react-router-dom";

export default function Main() {

    return (
        <>
            <Container style={{
                backgroundImage: `url(${bg})`
            }}>
                <Title>Recap League of Legends</Title>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    padding-top: 50px;
    color: white;
    font-size: 36px;
    font-family: 'Aboreto', cursive;
    display: flex;
    justify-content: center;

    @media (max-width: 480px) {
        font-size: 23px;
    }
`;