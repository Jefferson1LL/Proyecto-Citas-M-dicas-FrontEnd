const publicRoutes = {
    LOGIN: '/ingreso',
    REGISTER: '/registro',
    USERS: '/usuarios',
    USERS_ID: `/usuario/:id`,
    HOME: '/',
    ABOUT: '/acerca-de',
    QUESTIONS: '/preguntas',
    ANTD: '/antd'
};

const privateRoutes = {
    LOGOUT: '/logout',
    APPOINTMENTS: '/citas',
    ARTICLE_ID: '/articulo/:id'
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;