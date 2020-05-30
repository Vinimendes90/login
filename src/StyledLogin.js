import styled from 'styled-components';

export const Container = styled.div`
    background-color: #4285F4;
    padding: 25px;
    color: #FFF;
    font-weight: bold;

    width: 300px;
    margin: 0 auto;
    margin-top: 200px;
    
    border-radius: 0 2px 2px 0 rgba(0,0,0,0.5);
    
    input {
        padding: 5px;
        flex-grow: 1;
        outline: none;
        width: 300px;
    }

    button {
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.05);
        border: 0;
        border-radius: 4px;
        background: orange;
        cursor: pointer;
        width: 300px;
        
        font-weight: bold;
        color: #FFF;
    }
  

`;