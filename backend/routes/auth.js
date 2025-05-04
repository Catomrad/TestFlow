const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Регистрация
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existing = await prisma.user.findUnique({ where: { username } });
    if (existing) return res.status(400).json({ message: "Пользователь уже существует" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, password: hashed, role },
    });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Авторизация
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return res.status(400).json({ message: "Неверные данные" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: "Неверные данные" });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
