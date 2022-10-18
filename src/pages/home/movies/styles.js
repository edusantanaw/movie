import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-self: center;
        padding:2em;
        gap: 5em 2em;
        flex-wrap: wrap;
        padding-bottom: 4em;
    }

    .pagination{
        align-self:center;
        display: flex;
        gap: 0.5em;
        button{
            padding: 0.5em;
            color: #0000d5
        }
    }

`