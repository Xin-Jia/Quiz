import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/img.jpg';

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}

body{
    background-image:url(${BGImage});
    background-size:cover;
    margin:0;
    padding: 20px;
    display:flex;
    justify-content:center;
}

*{
    box-sizing:border-box;
    font-family: 'Nunito', sans-serif;
}
`;

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;

> p {
    color:#fff;
    filter:drop-shadow(3px 3px #F6ABAB);
};

.score {
    color:#fff;
    font-size:2rem;
    margin:0;
    filter:drop-shadow(3px 3px #F6ABAB);
};

h1{
    font-family: 'Nunito', sans-serif;
    background-image:linear-gradient(180deg,#E9758B,#F2C0F9);
    background-size:100%;
    background-clip:text;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    -moz-background-clip:text;
    -moz-text-fill-color:transparent;
    filter:drop-shadow(3px 3px #fff);
    font-size:90px;
    font-weight:400;
    text-align:center;
    margin:20px;
    cursor:default;
};

.start, .next{
    cursor:pointer;
    background:linear-gradient(180deg, #E9758B, #F2C0F9);
    border:2px solid #fff;
    box-shadow:0px 5px 10px rgba(0,0,0,0.25);
    border-radius:10PX;
    height:40px;
    margin:20px 0;
    padding:0 40px;
    color:#fff;
    transition: all .3s ease-in-out;

    &:hover{
        transform: scale(1.15);
    }
};

.start {
    max-width:200px;

};
`;