import styled from "styled-components";

export const Div = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

  input {
    position: absolute;
    transform: translateX(-1000vw);

    :checked + label {
      background-color: #219653;
    }

    :checked + label::before {
      transform: translateX(calc(50px / 2.8));
      background-color: #FFFFFF;
    }
  }

  label {     
    transition: 300ms ease-in-out;
    display: block;
    width: 35px;
    height: 16px;
    aspect-ratio: 2 / 1;
    background-color: #BABEC3;
    border-radius: 1000vw;
    padding: 2.5px 0px 3px 3px;
    cursor: pointer;
    
    ::before {
      content: "";
      transition: 300ms ease-in-out;
      display: block;
      width: calc(50px / 4.5);
      aspect-ratio: 1 / 1;
      background-color: #FFFFFF;
      border-radius: 1000vw;
    }
  }
  
`;