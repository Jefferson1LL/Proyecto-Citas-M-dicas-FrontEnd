const publicRoutes = {
    LOGIN: '/ingreso',
    REGISTER: '/registro-paciente',
    REGISTER1: '/registro-doctores',
    USERS: '/usuarios',
    USERS_ID: `/usuario/:id`,
    HOME: '/',
    ABOUT: '/acerca-de',

};

const privateRoutes = {
    LOGOUT: '/logout',
    APPOINTMENTS: '/citas',

};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;