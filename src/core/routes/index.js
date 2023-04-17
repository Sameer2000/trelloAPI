import cardRoute from './cardRoute.js';
import listRoute from './listRoute.js';

export default (app) => {
    app.use('/card', cardRoute);
    app.use('/list', listRoute);
    return app;
}