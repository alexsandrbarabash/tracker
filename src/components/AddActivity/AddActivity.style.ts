import styled from "styled-components";

export const Wrapper = styled.div`
  
  width: 100%;
  border-collapse: collapse;
  border: 2px #848484 solid;
  padding-left: 25px;
  padding-right: 20px;
  border-radius: 100px;
  
  input {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    border: none;
    font-size: 20px;
    background-color: inherit;
    color: #0d0d0d;
    
  }
  textarea:focus, input:focus{
    outline: none;
  }

  input::placeholder {
    color: #848484;
    opacity: 0.6;
  }
`;