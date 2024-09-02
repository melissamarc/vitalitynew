// backend/controllers/authController.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('../config/jwt');

module.exports = {
    register: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            // Verificar se o usuário já existe
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ error: 'Usuário já existe com este email' });
            }

            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);

            // Criar o usuário
            const user = await User.create({ name, email, password: hashedPassword });

            res.status(201).json({ message: 'Usuário registrado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Encontrar o usuário
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            // Comparar a senha
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Credenciais inválidas' });
            }

            // Gerar o token JWT
            const token = jwt.sign({ id: user.id, email: user.email });

            res.status(200).json({ message: 'Login realizado com sucesso', token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao fazer login' });
        }
    },
};
