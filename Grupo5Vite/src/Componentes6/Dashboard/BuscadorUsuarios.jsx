import React from 'react';
import '../../css/Dashboard.css';

function BuscadorUsuarios() {
    return (
        <main>
            <div className="buscador-container">
                <input type="text" className="buscador-usuarios" placeholder="Buscar por correo, nombre o apellidos..."/>
            </div>
        </main>
    );
}

export default BuscadorUsuarios;
/*
const [usuarios, setUsuarios] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  // Recuperar los datos de localStorage
  const data = localStorage.getItem('usuarios');
  if (data) {
    setUsuarios(JSON.parse(data));
  }
}, []);

// Filtrar los usuarios según el término de búsqueda
const filteredUsuarios = usuarios.filter(usuario => 
  usuario.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
);

*/

/*Se haría en el input el <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
*/      