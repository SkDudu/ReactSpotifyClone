import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { MdAccountCircle } from "react-icons/md";
import { MdLock } from "react-icons/md";
import {Link} from "react-router-dom";

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

    handleSubmit = (e) =>{
        e.preventDefault();
        const { email, password } = this.state;
        const user = { email, password };
        axios.get(`/users?email=${email}`, user).then(
            res => {
                const usersAuth = res.data[0];
                if ( usersAuth.password == password ){
                    localStorage("usuario autenticado com sucesso", JSON.stringify(usersAuth)); 
                    //window.location = '/Playlist';
                }
            }
        ).catch(
            err =>{
                console.log(err)
            }
        )
    }

    render() {
        return(
            <div className='login'>
                <form className='login-form' onSubmit={this.handleSubmit}>
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
                            <button className="btn" type="submit">Entrar</button>
                            <Link to={`/dashboard`}></Link>
                        </div>
                    </Paper>
                </form>
            </div>
        )
    }
}
export default Login;