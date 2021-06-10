import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FormControl,FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import '../../App.css';

const initialState = {
    name: '',
    email: '',
    confEmail: '',
    password: '',
    nameError: '',
    emailError: '',
    confEmailError: '',
    passwordError: '',
    date: '',
    gender: '',
}

class CadastroForm extends React.Component {
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
        let nameError="";
        let emailError="";
        let passwordError="";
        let confEmailError='';

        if(!this.state.name){
            nameError = "Preencha com um nome válido"
        }
        
        if(!this.state.email.includes('@')){
            emailError="Email inválido"
        }

        if(this.state.confEmail !== this.state.email){
            confEmailError = "Email diferente"
        }

        if(!this.state.password){
            passwordError = "Senha inválida"
        }

        if(emailError || nameError || passwordError || confEmailError){
            this.setState({emailError, nameError, passwordError, confEmailError});
            return false;
        }
        return true;
    } 

    handleSubmit = (e) =>{
        e.preventDefault();
        const { name, email, password, date, gender } = this.state;
        const user = { name, email, password, date, gender };
        axios.post('/users', user).then(
            res => {
                console.log(res)
            }
        ).catch(
            err =>{
                console.log(err)
            }
        )
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <Paper className="fundo-form">
                <h1 className="form-titulo">Cadastro</h1>
                <Grid container spacing={3}>
                    <Grid className="form-cadastro__group" item xs={12}>
                        <label htmlFor="name">Usuário:</label>
                        <input 
                            required 
                            id="name" 
                            name="name" 
                            type="text" 
                            onChange={e => this.onChange(e)} 
                            value={this.state.name}
                        />
                        <div className="error">{this.state.nameError}</div>
                    </Grid>
                    <Grid className="form-cadastro__group" item xs={12}>
                        <label htmlFor="name">Email:</label>
                        <input 
                            required 
                            id="email" 
                            name="email" 
                            type="email" 
                            onChange={e => this.onChange(e)} 
                            value={this.state.email}
                        />
                        <div className="error">{this.state.emailError}</div>
                    </Grid>
                    <Grid className="form-cadastro__group" item xs={12}>
                        <label htmlFor="name">Confimarção de email:</label>
                        <input required 
                            id="confEmail" 
                            name="confEmail" 
                            type="confEmail" 
                            onChange={e => this.onChange(e)} 
                            value={this.state.confEmail}
                        />
                        <div className="error">{this.state.confEmailError}</div>
                    </Grid>
                    <Grid className="form-cadastro__group" item xs={12}>
                        <label htmlFor="name">Senha:</label>
                        <input required 
                            id="password" 
                            name="password" 
                            type="password" 
                            onChange={e => this.onChange(e)} 
                            value={this.state.password}
                        />
                        <div className="error">{this.state.passwordError}</div>
                    </Grid>
                    <Grid className="form-cadastro__group" item xs={12}>
                        <label htmlFor="name">Data de nascimento:</label>
                        <input required 
                            id="date" 
                            name="date" 
                            type="date" 
                            onChange={e => this.onChange(e)} 
                            value={this.state.date}
                        />
                        <div className="error">{this.state.dateError}</div>
                    </Grid>
                    <Grid className="form-cadastro__group" item xs={12}>
                        <RadioGroup aria-label="gender" value={this.state.gender} name="gender" >
                        <label htmlFor="name">Gênero:</label>
                            <FormControlLabel value="female" control={<Radio />} onChange={e => this.onChange(e)} label="Feminino" />
                            <FormControlLabel value="male" control={<Radio />} onChange={e => this.onChange(e)} label="Masculino" />
                            <FormControlLabel value="other" control={<Radio />} onChange={e => this.onChange(e)} label="Outros" />
                        </RadioGroup>
                    </Grid>
                </Grid>
                <div>
                    <button className="form-btn" type="submit">Cadastrar</button>
                </div>
            </Paper>
        </form>
        );
    }
}

export default CadastroForm;