import "dotenv/config";
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/mascotas", routesMascotas); //Rutas de mascotas

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
} catch (error) {
    console.log('Error starting server:', error);
}