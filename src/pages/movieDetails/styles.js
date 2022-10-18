import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    img{
        width: 17em;
        border-radius: 6px;
    }
    .top{
        width: 100%;
        background: linear-gradient(to bottom, #2D0C5E 82%, #fff 20% );
        display: flex;
        padding: 3em 5em;
        gap: 2em;
        color: #fff;
    }
    .average{
        background-color: rgba(255, 255, 255, 0.1);
        width: 3em;
        height: 3em;
        padding: 0.85em;
        border-radius: 50%;
        border: 1px solid #14FF00;
        color: #14FF00;
    }
`