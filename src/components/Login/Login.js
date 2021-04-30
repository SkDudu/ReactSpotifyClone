import React from 'react';
import Paper from '@material-ui/core/Paper';
import { MdAccountCircle } from "react-icons/md";
import { MdLock } from "react-icons/md";


import '../../App.css';

const initialState = {
    user: '',
    userError:'',
    password: '',
    passwordError: '',
}

class Login extends React.Component{
    state = initialState;

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state)
            this.setState(initialState)
        }
    }

    validate = () =>{
        let emailError="";
        let passwordError="";

        if(!this.state.email){
            emailError = "Preencha com um email válido"
        }
        
        if(!this.state.email.includes('@')){
            emailError="Email inválido"
        }

        if(!this.state.password){
            passwordError = "Senha inválida"
        }

        if(emailError || passwordError){
            this.setState({emailError, passwordError});
            return false;
        }
        return true;
    } 

    render() {
        return(
            <div className='login'>
                <Paper className="login-form">
                    <h1 className="login-titulo">Login</h1>
                    <div className="user-input">
                        <MdAccountCircle />
                        <input 
                            required 
                            id="email" 
                            name="email" 
                            type="text" 
                            onChange={e => this.onChange(e)}
                            value={this.state.email}
                            placeholder="Informe seu email"
                        />
                    </div>
                    <div className="error">{this.state.emailError}</div>

                    <div className="password-input">
                        <MdLock />
                        <input 
                            required 
                            id="password" 
                            name="password" 
                            type="password" 
                            value={this.state.password}
                            onChange={e => this.onChange(e)}
                            placeholder="Informe sua senha"
                        />
                    </div>
                    <div className="error">{this.state.passwordError}</div>

                    <div className="login-btn">
                        <button onClick={e => this.onSubmit(e)} className="btn" type="submit">Entrar</button>
                    </div>
                </Paper>
            </div>
        )
    }
}
export default Login;