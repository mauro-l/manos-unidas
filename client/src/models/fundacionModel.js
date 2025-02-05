class Fundacion {
    constructor({
        fundacion_id,
        nombre,
        email,
        telefono,
        direccion,
        descripcion,
        fecha_registro,
        logo,
        web,
        email_contacto,
        area_principal,
        nro_registro,
    }) {
        this.fundacion_id = fundacion_id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.fecha_registro = new Date(fecha_registro);
        this.logo = logo;
        this.web = web;
        this.email_contacto = email_contacto;
        this.area_principal = area_principal;
        this.nro_registro = nro_registro;
    }

    getDescripcionCorta(maxLength = 100) {
        return this.descripcion.length > maxLength
            ? `${this.descripcion.substring(0, maxLength)}...`
            : this.descripcion;
    }
}

export default Fundacion;
