class Voluntario {
    constructor({
        voluntario_id,
        nombre,
        apellido,
        email,
        sexo,
        idioma,
        telefono,
        intereses,
        fecha_registro,
        estudios,
        habilidades,
        ubicacion,
        profesion,
        foto_perfil,
    }) {
        this.voluntario_id = voluntario_id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.sexo = sexo;
        this.idioma = idioma;
        this.telefono = telefono;
        this.intereses = intereses;
        this.fecha_registro = new Date(fecha_registro);
        this.estudios = estudios;
        this.habilidades = habilidades;
        this.ubicacion = ubicacion;
        this.profesion = profesion;
        this.foto_perfil = foto_perfil;
    }

    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

export default Voluntario;
