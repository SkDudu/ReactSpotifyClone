import React, {Component} from 'react';
import forro from './forro.jpg';
import rock from './rock.jpg'
import sertanejo from './sertanejo.jpg';
import samba from './samba.jpg';
import reggae from './reggae.jpg';
import funk from './funk.jpg';
import pop from './pop.jpg';
import mpb from './mpb.jpg';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



export class Playlist extends Component {
    constructor(props){
        super(props);

        let playlists = [
            {
                id: 1,
                nome: 'Rock',
                capa: rock
            },
            {
                id: 2,
                nome: 'Forro',
                capa: forro
            },
            {
                id: 3,
                nome: 'Sertanejo',
                capa: sertanejo
            },
            {
                id: 4,
                nome: 'Samba',
                capa: samba
            },
            {
                id: 5,
                nome: 'Reggae',
                capa: reggae
            },
            {
                id: 6,
                nome: 'Funk',
                capa: funk
            },
            {
                id: 7,
                nome: 'Pop',
                capa: pop
            },
            {
                id: 8,
                nome: 'Mpb',
                capa: mpb
            },
        ]

        this.state = {playlists};
    }
    render(){

    return(
        <CardColumns>
            {this.state.playlists.map((playlist) => (
                
                    <Card >
                        <Card.Img variant="top" src={playlist.capa} />
                        <Card.Body>
                            <Card.Title>{playlist.nome}</Card.Title>
                        </Card.Body>
                    </Card>
               
            ))}
        </CardColumns>
    )
    

    }
}



export default Playlist;