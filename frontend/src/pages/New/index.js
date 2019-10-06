import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    {/* Faz o preview da imagem */}
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    },[thumbnail] );

    async function handleSubmit(event) {
        event.preventDefault();
        
        const data = new FormData();
        const user_id = localStorage.getItem('user');
        data.append('thumbnail', thumbnail); // adiciona as informações dentro do objeto
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers: { user_id }
        }); 

        history.push('/dashboard'); // redirecionamento.
    }

    return (
        <form onSubmit={handleSubmit}>

            <label 
                id="thumbnail" 
                style={{ backgroundImage: `url(${preview})`}}
                className={thumbnail ? 'has-thumbnail' : '' }
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/> {/* pega a imagem colocada */}
                <img src={camera} alt="Selecionar Imagem"/>
            </label>
            {/* Nome da empresa */}
            <label htmlFor="company">Empressa *</label>
            <input 
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            {/* Tecnologias */}
            <label htmlFor="techs">Tecnologias * <span>(separadas por virgula)</span></label>
            <input 
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            {/* preço */}
            <label htmlFor="price">Valor da diária * <span>(em branco para GRATUITO)</span></label>
            <input 
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}