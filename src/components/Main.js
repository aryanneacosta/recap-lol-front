import { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import bg from './../assets/bg.png';
import recapButton from './../assets/recapButton.png';
import box from './../assets/box.png';
import { useNavigate } from "react-router-dom";

export default function Main() {
    const [form, setForm] = useState({nickname: ''});
    const navigate = useNavigate();

    function recap(event) {
        console.log(form);
        navigate(`/stats/:${form.nickname}`);
    }
    
    return (
        <>
            <Container style={{
                backgroundImage: `url(${bg})`
            }}>
                <Title>Recap League of Legends</Title>
                <Nav style={{
                    backgroundImage: `url(${box})`
                }}>
                    <NavTitle>Insira seu nick</NavTitle>
                    <Input>
                        <form onSubmit={recap}>
                            <input
                                type="name"
                                name="name"
                                value={form.nickname}
                                placeholder="nick"
                                required
                                onChange={e => setForm({ ...form, nickname: e.target.value})}
                            />
                            <button
                                type="submit"
                            >
                                <img src={recapButton} alt='button'/>
                            </button>
                        </form>
                    </Input>
                </Nav>
                <Info>
                    <h2>O que é o RECAP?</h2>
                    <h3>RECAP é um jeito de você ver</h3>
                    <h3>suas estatísticas no</h3>
                    <h3>LOLzinho e compartilhar</h3>
                    <h3>com seus amigos.</h3>
                </Info>
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

const Nav = styled.div`
    height: 215px;
    width: 215px;
    background-color: rgba(1, 1, 1, 0);
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const NavTitle = styled.div`
    font-family: 'Aboreto', cursive;
    font-size: 20px;
    color: white;
`;

const Input = styled.div`
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        input {
            height: 25px;
            width: 150px;
            margin-bottom: 15px;
        }

        input::placeholder {
            font-family: 'Aboreto', cursive;
            font-size: 15px;
            color: black;
        }

        button {
            background-color: rgba(1, 1, 1, 0);
            border: 0px;

            img {
                height: 40px;
                width: 150px;
            }
        }

        button:hover {
            cursor: pointer;
        }
    }
`;

const Info = styled.div`
    height: 100px;
    width: 200px;
    margin-top: 30px;
    color: white;
    font-family: 'Aboreto', cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #08182b;
    border-radius: 5px;
    box-shadow: 0 0 1em black;

    h2 {
        font-size: 17px;
        margin-bottom: 8px;
    }

    h3 {
        font-size: 11px;
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 3px;
    }
`;