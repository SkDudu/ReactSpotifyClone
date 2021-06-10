import React, {Component} from 'react';
import  { Accordion, Card, Button }  from  'react-bootstrap';
import logo from './spotify.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './FaqPage.css';




export class FaqPage extends Component {
  render(){
    return (
      <>
        <div>
          <div className="Title">
            <h1>Como começar</h1>
            <h6>Confira tudo o que você precisa saber para começar a usar o Spotify.</h6>
          </div>
          <Accordion className="App">
            <Card className="questions">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="questionLink">
                  Crie a sua conta
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>Você pode criar a sua conta no site do Spotify ou no aplicativo. </p>
                  <p>Inscreva-se com o seu e-mail ou pelo Facebook ou com o número de telefone</p>
                  <b>Solte o som</b>
                  <p>Você já criou uma conta e baixou o aplicativo. Agora, só falta botar música para tocar!

                  <p>Confira estes artigos para começar:</p>
                  <p>Como tocar música</p>
                  <p>Playlists</p>
                  <p>Sua Biblioteca</p>
                  <p>Noções básicas sobre a conta</p>   
                  </p>
                  
                  <p>No nosso site de suporte, você encontra mais guias, dicas, truques e ajuda.</p>
                  <p>No nosso site de suporte, você encontra mais guias, dicas, truques e ajuda. A Comunidade do Spotify também tem bons conselhos.</p>
                  <p>Última atualização: 22 de abril de 2021</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="questions">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="questionLink">
                  Não me lembro das minhas informações de login
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1"> 
                <Card.Body>
                  <p>Se você não se lembrar da sua senha, use a página de redefinição de senha.</p>
                  <p>Se não se lembrar do seu e-mail/nome de usuário, acesse a página de redefinição de senha e insira os endereços de e-mail que você pode ter usado para criar uma conta. Quando o endereço certo for inserido, aparecerá uma mensagem dizendo que o e-mail de redefinição de senha foi enviado. </p>
                  <p>Observação: existem várias maneiras de criar uma conta; por exemplo, usando um e-mail, um número de telefone, o Facebook ou a Apple. Tente fazer login usando essas opções para localizar a sua conta.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        </>
    )
  }
}
export default FaqPage;