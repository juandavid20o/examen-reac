import { useState } from "react";

function CrearProducto() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("");

    async function guardar(event) {
        event.preventDefault();

        const url = "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/productos";

        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998"
                },
                body: JSON.stringify({
                    nombre,
                    descripcion,
                    precio: parseFloat(precio),
                    stock: parseInt(stock),
                    categoria,
                    estado
                }),
            });

            setNombre("");
            setDescripcion("");
            setPrecio("");
            setStock("");
            setCategoria("");
            setEstado("");

            alert("✅ Producto creado con éxito");
        } catch (error) {
            console.error("Error al crear producto:", error);
            alert("❌ Error al guardar producto");
        }
    }

    return (
        <div>
            <h2>CREAR PRODUCTO</h2>
            <form>
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
                <button type="button" onClick={guardar}>Guardar</button>
            </form>
        </div>
    );
}

export default CrearProducto;