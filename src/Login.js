import React,{useState} from 'react';
import {Container} from './StyledLogin';

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");


export default function Login(){
        const [password, setPassword] = useState({backgroundColor: "#4285F4"});

        function analyze(event){
            event.preventDefault();

            if(strongRegex.test(event.target.value)){
                setPassword({ backgroundColor: "#0F9D58"})
            } else if(mediumRegex.test(event.target.value)){
                setPassword({ backgroundColor: "#F4B400"})
            } else {
                setPassword({ backgroundColor: "#DB4437"})
            }
        }

    
        return(
            <Container style={{backgroundColor: password.backgroundColor}}>
                <p><label for="password">Senha:</label></p>
                <p><input type="text" name="password" onChange={analyze} /></p>
                <button>Enviar</button>
            </Container>
        );
    
}




