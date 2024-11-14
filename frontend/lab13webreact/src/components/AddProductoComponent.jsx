

import  { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductoService from '../services/ProductoService';


export const AddProductoComponent = () => {
    const [nombreProducto, setNombreProducto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const navigate = useNavigate();

    const {id} = useParams();


    const saveOrUpdatProduct = (e) =>{
       
        e.preventDefault();

        const producto ={
            nombre: nombreProducto,
            descripcion: descripcion,
            precio: precio,
            stock: stock

        }

        if(id){
            
            ProductoService.updateProducto(id,producto).then((response)=>{
                    console.log(producto);
                    navigate('/list-product');
            }).catch(error=>{
                    console.log(error)
            })

        }
        else{
           ProductoService.createProducto(producto).then((response)=>{
                console.log(producto);
                navigate('/list-product');
            }).catch(error=>{
                console.log(error)
            })
        }
    }

    const titulo =()=>{
        if(id){
            return <h2 className='text-center'>Actualizar Producto</h2>
        }
        else{
            return <h2 className='text-center'>Registrar Producto</h2>
        }
    }


    
    useEffect(()=>{
        ProductoService.getProductoById(id).then(response =>{
            setNombreProducto(response.data.nombre);
            setDescripcion(response.data.descripcion);
            setPrecio(response.data.precio);
            setStock(response.data.stock);
            
        }).catch(error =>{
            console.log(error);
        })
    },[])




  return (
    <div>
    <div className='container' style={{ marginTop: "80px" }}>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                <h2 className='mt-4'>{titulo()}</h2>
                <div className='card-body'>
                    <form className='my-4'>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Nombre del Producto:</label>
                            <input
                              required
                                type='text'
                                placeholder='Escriba el nombre del producto'
                                name='txtNombreProducto'
                                className='form-control'
                                value={nombreProducto}
                                onChange={(e) => setNombreProducto(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Descripción:</label>
                            <textarea
                                required
                                placeholder='Escriba una descripción del producto'
                                name='txtDescripcion'
                                className='form-control'
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Precio:</label>
                            <input
                                required
                                type='number'
                                placeholder='Escriba el precio del producto'
                                name='txtPrecio'
                                className='form-control'
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Stock:</label>
                            <input
                                required
                                type='number'
                                placeholder='Cantidad en stock'
                                name='txtStock'
                                className='form-control'
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>
                        <div style={{ marginTop: '40px' }}>
                            <button className='btn btn-danger ' onClick={(e) => saveOrUpdatProduct(e) }>Guardar</button>
                            <Link to='/list-product' className='btn btn-primary '  style={{ marginLeft: '20px' }} >Cancelar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}
