import { useState } from "react";
import "./Componentes.css";

function PerfilLider() {
    const [likes, setLikes] = useState(0);

    return (
    <div className="card">
        <h2>👨‍💻 Líder del Proyecto</h2>

        <p><strong>Nombre:</strong> Jeremy</p>

        <p>
        Responsable de crear el repositorio, administrar las ramas y realizar
        los Merge de los Pull Request.
        </p>

        <button onClick={() => setLikes(likes + 1)}>
        👍 Likes: {likes}
        </button>
    </div>
    );
}

export default PerfilLider;