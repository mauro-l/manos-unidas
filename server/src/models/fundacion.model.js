import mongoose from "mongoose";
import bcrypt from "bcrypt";

const FundacionSchema = new mongoose.Schema({
  nombre: {
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
  telefono: {
    type: String,
    required: true,
  },
  ubicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ubicacion",
    required: true,
  },
  fecha_registro: {
    type: Date,
    default: Date.now,
  },
  logo: {
    type: String,
  },
  web: {
    type: String,
  },
  email_contacto: {
    type: String,
  },
  area_principal: {
    type: String,
  },
  nro_registro: {
    type: String,
    required: true,
  },
  donaciones: {
    type: String,
  },
});

// Middleware to hash the password before saving
FundacionSchema.pre("save", async function (next) {
  if (this.isModified("contrasena")) {
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
FundacionSchema.pre("findOneAndUpdate", async function (next) {
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

const Fundacion = mongoose.model("Fundacion", FundacionSchema);
export default Fundacion;

