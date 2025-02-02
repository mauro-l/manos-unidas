import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const FundacionSchema = new mongoose.Schema({
    fundacion_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha_registro: {
        type: Date,
        default: Date.now
    },
    logo: {
        type: Buffer
    },
    web: {
        type: String
    },
    email_contacto: {
        type: String
    },
    area_principal: {
        type: String
    },
    nro_registro: {
        type: String,
        required: true
    }
});

// Middleware to hash the password before saving
FundacionSchema.pre('save', async function (next) {
    if (this.isModified('contrasena')) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.contrasena = await bcrypt.hash(this.contrasena, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

// Middleware to hash the password before updating
FundacionSchema.pre('findOneAndUpdate', async function (next) {
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

const Fundacion = mongoose.model('Fundacion', FundacionSchema);
export default Fundacion;
