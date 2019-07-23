import express, { Router } from 'express';
import path from 'path';
import document from './index.html';

process.env.TZ = 'UTC';

const PORT = 3000;
const app = express();
const router = Router();

router.use(express.static(path.resolve(__dirname, 'static')));

router.get('/*', (req, res) => res.send(document));

app.use(router);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
