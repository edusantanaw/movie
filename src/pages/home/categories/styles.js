import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 25em;
  background-color: #2d0c5e;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;    
  h1 {
    margin-top: 2em;
    max-width: 16em;
    font-size: 2.5em;
    letter-spacing: -0.5px;
    margin-bottom: 1em;
  }
  span{
    text-transform: uppercase;
    font-size: 0.9em;
    margin-bottom: 1em;
  }

  ul{
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em 0.7em; 
    justify-content: center;
    li{
        list-style: none;
        color: #323232;
        background-color:#fff;
        padding: 0.5em ;
        border-radius: 4px; 
        cursor: pointer;

        &:hover{
          background-color: #f0f0f0;
        }
    }
  }

  .show {
    background-color: orange;
  }
`;
