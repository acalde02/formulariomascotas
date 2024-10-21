import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "../Styles/FormularioMascota.css";

const FormularioMascotas = () => {
    const [mascotas, setMascota] = useState([]);
    const navigate = useNavigate(); // Inicializar el hook useNavigate
    const [filtroTipo, setFiltroTipo] = useState("");  // Para el tipo de mascota
    const [filtroEdad, setFiltroEdad] = useState("");  // Para la edad de la mascota

    // Fetch data inside useEffect
    useEffect(() => {
        fetch("https://huachitos.cl/api/animales")
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); 
            if (Array.isArray(data.data)) {
                setMascota(data.data);
            } else {
                console.error("Error de datos", data);
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);

    const handleFiltro = () => {
        // Filtrar mascotas por tipo, edad y tamaño
        return mascotas.filter(mascota => {
            const tipoMatch = filtroTipo ? mascota.tipo.toLowerCase() === filtroTipo.toLowerCase() : true;
            const edadMatch = filtroEdad ? mascota.edad.toLowerCase().includes(filtroEdad.toLowerCase()) : true;
            return tipoMatch && edadMatch;
        });
    }

    const mascotasFiltradas = handleFiltro();
    return (
        <div className="Mascotas">
            <h1>Mascotas</h1>

            {/* Filtros */}
            <div className="filtros">
                <label>Filtrar por tipo:</label>
                <input
                    type="text"
                    placeholder="Perro, Gato, etc."
                    value={filtroTipo}
                    onChange={(e) => setFiltroTipo(e.target.value)}
                />

                <label>Filtrar por edad:</label>
                <input
                    type="text"
                    placeholder="1 Año, 2 Años, etc."
                    value={filtroEdad}
                    onChange={(e) => setFiltroEdad(e.target.value)}
                />
            </div>

            <div className="mascotas-container">
                {mascotasFiltradas.length > 0 ? (
                    mascotasFiltradas.map((mascota) => (
                        <div key={mascota.id} className="mascota-card">
                            <ul>
                                <img src={mascota.imagen} alt={mascota.nombre} className="img-mascota" />
                                <p>Nombre: {mascota.nombre}</p>
                                <p>Edad: {mascota.edad}</p>
                                <p>Genero: {mascota.genero}</p>
                                <div dangerouslySetInnerHTML={{ __html: mascota.desc_fisica }}></div>
                                <div dangerouslySetInnerHTML={{ __html: mascota.desc_personalidad}}></div>
                                <div dangerouslySetInnerHTML={{ __html: mascota.desc_adicional }}></div>
                                <button onClick={() => navigate('/Formulario')}>Adoptar</button>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No hay mascotas que coincidan con los filtros.</p>
                )}
            </div>
        </div>
    );
}

export default FormularioMascotas;
