import { useEffect, useState } from "react";

function ProductoGet() {
    const [productos, setProductos] = useState([]);
    // ...eliminado estado de edición...

    const API_URL = "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/productos";
    const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998";

    useEffect(() => {
        obtenerProductos();
    }, []);

    function obtenerProductos() {
        fetch(`${API_URL}?select=*`, {
            headers: {
                apikey: API_KEY,
                Authorization: `Bearer ${API_KEY}`
            }
        })
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error al obtener productos:", error));
    }

    // ...eliminada función eliminar...

    // ...eliminado función de edición...

    // ...eliminado función de actualizar...

    return (
        <div>
            <h2>LISTADO PRODUCTOS</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        {/* <th>Acciones</th> */}
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.nombre}</td>
                            <td>{prod.categoria}</td>
                            <td>{prod.precio}</td>
                            <td>{prod.stock}</td>
                            <td>{prod.descripcion}</td>
                            <td>{prod.estado}</td>
                            {/* <td>
                                <button onClick={() => eliminar(prod.id)}>Eliminar</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductoGet;
