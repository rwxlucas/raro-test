import express from 'express';
import cors from 'cors';
import pagination from './src/routes/pagination';
import { SERVER_PORT } from './src/utils/env';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './src/swagger.json';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/pagination', pagination);

// Run server
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));