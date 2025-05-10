import authRoutes from './src/routes/auth';
import caseRoutes from './src/routes/caseRoutes';
import cors from 'cors';
import express from 'express';
import moduleRoutes from './src/routes/moduleRoutes';
import path from 'path';
import planRoutes from './src/routes/planRoutes';
import projectRoutes from './src/routes/project';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/test-case', caseRoutes);
app.use('/api/test-plan', planRoutes);
app.use('/api/module', moduleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Статичная сборка фронта (если нужно)
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });
