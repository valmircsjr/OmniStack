import React, { useState } from 'react';

import api from '../../services/api';

/**
 * 
 * @param {history} param0 É utilizado para fazer navegaçao
 */
export default function Login({ history }) {

    const [email, setEmail] = useState(''); // atualiza o valor em tempo real
    
    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('/sessions', { email });
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard');
    }

    return (
        <>
            <p>
                Oferela <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> E-MAIL *</label>
                <input
                    id="email"
                    type="email"
                    placeholder="exemplo@provedor.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)} // local do input
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}