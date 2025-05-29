const express = require('express');
const app = express();
const bookRoutes = require('./routes/books'); // ✅ Make sure this matches your actual file location

app.use(express.json());
app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`📚 Server is running at http://localhost:${PORT}`);
});
