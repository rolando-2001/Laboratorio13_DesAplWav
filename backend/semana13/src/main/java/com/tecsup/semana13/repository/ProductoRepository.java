package com.tecsup.semana13.repository;

import com.tecsup.semana13.models.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository  extends JpaRepository<Producto,Long> {
}
