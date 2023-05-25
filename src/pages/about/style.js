import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3A3A45;
    margin-top: 30px;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    width: 80%; // Ajuste este valor conforme necessário
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%; // Ajuste este valor conforme necessário

    img {
        max-width: 70%;
        height: auto;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%; // Ajuste este valor conforme necessário
    margin-left: 20px; // Adicionado para dar espaço à imagem
`;

export const StyledText = styled.div`
    padding: 20px;
    background: #F9F9F9;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #3A3A45;
    font-size: 18px;
    line-height: 1.6;
    text-align: justify;

    strong {
        color: #3A3A45;
        font-weight: 600;
    }

    em {
        color: #3f51b5;
    }

    p {
        margin-bottom: 10px;
    }
`;
