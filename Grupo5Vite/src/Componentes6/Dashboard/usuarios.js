const usuarios = [
    { id: 1, name: "Antonio", apellido: "Lopez Caro", correo: "correo@sanchez.com", fechaRegistro: "11/02/2022 ", estado: "Activo", acciones: "Ver | Desactivar" }
    
  ];
  
  localStorage.setItem('usuarios', JSON.stringify(usuarios));