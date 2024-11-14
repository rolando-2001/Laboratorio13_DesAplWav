package com.tecsup.semana13.controller;




import com.tecsup.semana13.Exception.ResourceNotFoundException;
import com.tecsup.semana13.models.Cliente;
import com.tecsup.semana13.models.Producto;
import com.tecsup.semana13.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    @GetMapping("productos")
    public List<Producto> ListarProductos(){
        return productoRepository.findAll();
    }
    @PostMapping("productos")
    public Producto guardarProducto(@RequestBody Producto producto){
        return productoRepository.save(producto);

    }

    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> ListarProductoorId(@PathVariable long id){
        Producto producto = productoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("El producto no existe"+ id));
        return ResponseEntity.ok(producto);
    }

    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> ActualizarProducto(@PathVariable long id, @RequestBody Producto productoRequest){
        Producto producto = productoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("El producto no existe"+ id));

        producto.setNombre(productoRequest.getNombre());
        producto.setDescripcion(productoRequest.getDescripcion());
        producto.setPrecio(productoRequest.getPrecio());
        producto.setStock(productoRequest.getStock());

        Producto productoActualizada=productoRepository.save(producto);
        return ResponseEntity.ok(productoActualizada);
    }







    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Map<String, Boolean>> EliminarCliente(@PathVariable long id){
    Producto producto = productoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("El producto no existe"+ id));

        productoRepository.delete(producto);
        Map<String, Boolean> response = new HashMap<>();
        response.put("eliminado", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
