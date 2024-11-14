import axios from 'axios'; // Asegúrate de importar axios

const PRODUCT_BASE_REST_API_URL = "http://localhost:8081/api/v1/productos";

class ClienteService {


    getAllProductos() {
        return axios.get(PRODUCT_BASE_REST_API_URL);
    }

    createProducto(producto){
        return axios.post(PRODUCT_BASE_REST_API_URL, producto);
    }


    getProductoById(productoId){
        return axios.get(PRODUCT_BASE_REST_API_URL + '/' +productoId);
    }

    updateProducto(productoId,producto){
        return axios.put(PRODUCT_BASE_REST_API_URL + '/' +productoId, producto);
    }


    deleteProducto(clienteId){
        return axios.delete(PRODUCT_BASE_REST_API_URL + '/' +clienteId);
    }


}

export default new ClienteService();