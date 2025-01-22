import mongoose from 'mongoose';

const VoluntarioSchema = new mongoose.Schema({
    voluntario_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    idioma: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    intereses: {
        type: [String],
        required: true,
    },
    fecha_registro: {
        type: Date,
        default: Date.now,
    },
    estudios: {
        type: String,
        required: true,
    },
    habilidades: {
        type: [String],
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    },
    profesion: {
        type: String,
        required: true,
    },
    foto_perfil: {
        type: Buffer,
        required: true,
    },
});

// Middleware para hashear la contraseña antes de guardar
VoluntarioSchema.pre('save', async function (next) {
    if (!this.isModified('contrasena')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.contrasena = await bcrypt.hash(this.contrasena, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Middleware para hashear la contraseña antes de actualizar
VoluntarioSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate();
    if (update.contrasena) {
        try {
            const salt = await bcrypt.genSalt(10);
            update.contrasena = await bcrypt.hash(update.contrasena, salt);
            this.setUpdate(update);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

const Voluntario = mongoose.model('Voluntario', VoluntarioSchema);

export default Voluntario;
