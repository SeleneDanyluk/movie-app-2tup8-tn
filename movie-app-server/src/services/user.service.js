import User from "../models/user/User.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (user)
        return res.status(400).json({ message: "Usuario ya existe" });

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    res.json({ message: "Usuario creado con exito", userId: newUser.id });
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user)
        return res.status(400).json({ message: "Email invalido" });

    const comparison = await bcrypt.compare(password, user.password);
    if(!comparison)
        return res.status(400).json({ message: "Contraseña invalida" });

    const secretKey = "programacion3-2C-2026";
    const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" })

    return res.json({ token });
};
