const express = require("express");
const path = require("path");
const cors = require('cors');
const authRoutes = require('./src/routes/auth.ts');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Статичная сборка фронта (если нужно)
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

// const express = require("express");
// const path = require("path");
// const cors = require("cors")

// const app = express();
// const PORT = 4000;
// const router = express.Router();



// app.use(express.static(path.join(__dirname, 'frontend/build')));

// app.get("/", function(request, response){
//     response.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
// });


// app.listen(PORT, function(){
//     console.log(`Server started on port ${PORT}`);
// });