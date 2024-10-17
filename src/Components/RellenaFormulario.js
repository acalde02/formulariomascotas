import { useState } from "react";

const RellenaFormulario = () => {
    const [nombreMascota, setNombreMascota] = useState("");
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [telefono, setTelefono] = useState("");
    const [enviado, setEnviado] = useState(false);


    const enviarFormulario = (e) => { 
        // Aca se mandaria una solicutud POST a la API
        e.preventDefault();
        console.log("Se envió el formulario. Datos:\n");
        console.log("Nombre de la mascota:", nombreMascota);
        console.log("Nombre del dueño:", nombre);
        console.log("Edad de la mascota:", edad);
        console.log("Teléfono de contacto:", telefono);
        setEnviado(true);
    }

    return(
        <div>
            <h1>Formulario de adopción</h1>
            {/* Agregar un evento onSubmit al formulario */}
            {enviado ? 
            <p>Formulario enviado</p> : 

            <form onSubmit={enviarFormulario}>
                <label htmlFor="nombreMascota">Nombre de la mascota:</label>
                <input type="text" id="nombreMascota" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)} />
                <label htmlFor="nombre">Nombre del dueño:</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <label htmlFor="edad">Edad de la mascota:</label>
                <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                <label htmlFor="telefono">Teléfono de contacto:</label>
                <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <button type = "submit">Enviar</button>
            </form>
     }
        </div>
    )
}

export default RellenaFormulario;