import React, { useState, useEffect } from 'react';

import Carro from '../../api/Veiculos';

const Carros = () => {

    const [carrosLista, setCarrosLista] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            const carrosLista = await Carro;
            setCarrosLista(carrosLista);
        }
        loadAll();
    }, [])

    return (
        <>
            <h2>Carros</h2>
            <select>
                {
                    carrosLista.map((item,key) => (
                    
                        <option value="item.modelo">{item.nome} | {item.marca} | {item.modelo} | {item.ano}</option> 
                    ))
                }
            </select>
        </>
    );
}

export default Carros;