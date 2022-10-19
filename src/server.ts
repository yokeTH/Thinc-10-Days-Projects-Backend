import App from '@app';
import apiRouter from '@routes/apiRoute';

const app = new App([new apiRouter()]);
app.listen();
