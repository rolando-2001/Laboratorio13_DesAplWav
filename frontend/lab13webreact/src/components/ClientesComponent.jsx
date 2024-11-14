import React, { useEffect, useState } from 'react';
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

export const ListClientesComponent = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
      listarClientes()
    },[])


    const listarClientes = () =>{
        ClienteService.getAllClientes().then(response =>{
            setClientes(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

const deleteCliente = (clienteId) =>{
    ClienteService.deleteCliente(clienteId).then(response => {
        listarClientes();
        
    }).catch(error =>{
        console.log(error);
    })
}

    return (
<div className="container mt-5">
    <h2 className="text-center mb-4 text-primary">Listado de Clientes</h2>

    <Link to="/add-cliente" className="btn btn-success mb-3">Agregar Cliente</Link>
    
    <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover shadow-sm">
            <thead className="table-light">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellidos}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <Link className="btn btn-info btn-sm" to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                <button style={{ marginLeft: "10px" }} className="btn btn-danger btn-sm" onClick={() => deleteCliente(cliente.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
</div>
    );
}
export default ListClientesComponent;





