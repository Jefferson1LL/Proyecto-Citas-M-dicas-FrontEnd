import React from 'react';
import '../styles/questions.css';
import { Layout, Row, Col, Button, Popover,Divider,Space,Card,Collapse} from 'antd';



const QuestionsPage = () => {
    const { Panel } = Collapse;
    return (
        <div className='container'>
            <h1>PASOS PARA REGISTRO </h1>
            <p>
                En este sistema de citas tendran la posibilidad de realizar consultas de sus citas dadas
                de acuerdo a su medico, fecha, horario. Aconsejamos seguir los siguientes pasos detallados
                continuacion para evitar algun tipo de error o problema con la autenticacion de cualquier
                forma de usuario que ud sea.
            </p>



            <Divider>COMO REGISTRARME COMO DOCTOR</Divider>
            <Collapse accordion className='scroll'>
                <Panel header="PASO 1" key="1">
                    <p>El administrador del sistema asignara un espacio en la base de datos de acuerdo a su acreditacion
                        para lo cual el sistema avalara su perfil y le asignara su uso adecuado segun su perfil
                        y validacion del mismo.</p>
                </Panel>
                <Panel header="PASO 2" key="2">
                    <p>Una vez en la base de datos ud tiene la opcion de registrarse como doctor para lo cual
                        el sistema pedira que ingrese su correo y una contraseña segun el caso.</p>
                </Panel>
                <Panel header="PASO 3" key="3">
                    <p>Luego de estar dentro del sistema ud tendra la posibilidad de realizar los cambios que ud crea
                        conveniente como son: agregar una fotografia en su perfil, una descripcion, telefono y demas.</p>
                </Panel>
            </Collapse>





            <Divider>COMO REGISTRARME COMO PACIENTE</Divider>

            <Collapse accordion className='scroll'>
                <Panel header="PASO 1" key="1">
                    <p>El administrador del sistema asignara un espacio en la base de datos de acuerdo a su acreditacion
                        para lo cual el sistema avalara su perfil y le asignara su uso adecuado segun su perfil
                        y validacion del mismo.</p>
                </Panel>
                <Panel header="PASO 2" key="2">
                    <p>Una vez en la base de datos ud tiene la opcion de registrarse como paciente, para lo cual
                        el sistema pedira que ingrese su correo y una contraseña segun el caso.</p>
                </Panel>
                <Panel header="PASO 3" key="3">
                    <p>Luego de estar dentro del sistema ud tendra la posibilidad de realizar los cambios que ud crea
                        conveniente como son: agregar una fotografia en su perfil, una descripcion, telefono y demas.</p>
                </Panel>
            </Collapse>





            <Divider>COMO CANCELAR UNA CITA</Divider>

            <Collapse accordion className='scroll'>
                <Panel header="PASO 1" key="1">
                    <p>Verificar su turno de cita, para lo cual ud debe ingresar con sus credenciales
                        una vez dentro del sistema ud tendra que ir al apartado de citas.</p>
                </Panel>
                <Panel header="PASO 2" key="2">
                    <p>Registre su cancelacion en la pagina de citas verifique en el estado activo
                        en dicho recuadro asigne un codigo el cual se le enviara a su correo electronico una
                        vez el area de soporte tecnico asigne uno y este dentro de los parametros de cancelacion.</p>
                </Panel>
                <Panel header="PASO 3" key="3">
                    <p>Una vez registrada su cancelacion y verificacion de la misma en las 5 horas posteriores
                        volver a verificar su estado que haya pasado de activo a cancelado.</p>
                </Panel>
            </Collapse>



            <Divider>SUGERENCIAS Y RECLAMOS</Divider>
            <p>
                Para nosotros es un placer atenderle, por ello es necesario que envie un correo electronico a
                las siguientes direcciones para asi contribuir con nosotros de manera oportuna cualqueir duda o inquietud
                de reclamos o sugerencias. Por lo cual permanecemos en mejora de nuestra atencion al cliente.
            </p>



            <Row>
                <Col>
                    <Row>
                        <div >
                            <Divider>
                                <img style={{width: 50}} src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEgMGgtMThjLTEuNjU1IDAtMyAxLjM0NS0zIDN2MThjMCAxLjY1NCAxLjM0NSAzIDMgM2gxOGMxLjY1NCAwIDMtMS4zNDYgMy0zdi0xOGMwLTEuNjU1LTEuMzQ2LTMtMy0zeiIgZmlsbD0iIzNiNTk5OSIvPjxwYXRoIGQ9Im0xNi41IDEydi0zYzAtLjgyOC42NzItLjc1IDEuNS0uNzVoMS41di0zLjc1aC0zYy0yLjQ4NiAwLTQuNSAyLjAxNC00LjUgNC41djNoLTN2My43NWgzdjguMjVoNC41di04LjI1aDIuMjVsMS41LTMuNzV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" />
                            </Divider>
                        </div>
                    </Row>
                </Col>

                <Col>
                    <div>
                        <Divider>
                            <img style={{width: 50}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZ
W5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQ
gMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1s
bnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxM
iIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU
9ImZpbGw6Izg2RjI4QjsiIGQ9Ik0wLDUxMmw1MS45MTctMTQ4LjMzNGMtMTkuOTM4LTM2LjEyMy0zMC40NDQtNzYuOTA0LTMwLjQ0NC0xM
TguNDAyDQoJYzAtNjUuNTEyLDI1LjUxMS0xMjcuMTA0LDcxLjgzNi0xNzMuNDI3UzIwMS4yMjQsMCwyNjYuNzM3LDBTMzkzLjg0LDI1LjU
xMSw0NDAuMTY0LDcxLjgzNlM1MTIsMTc5Ljc1MSw1MTIsMjQ1LjI2Mw0KCXMtMjUuNTExLDEyNy4xMDQtNzEuODM2LDE3My40MjdjLTQ2L
jMyNCw0Ni4zMjQtMTA3LjkxNSw3MS44MzYtMTczLjQyNyw3MS44MzZjLTQxLjUsMC04Mi4yNzktMTAuNTA1LTExOC40MDItMzAuNDQ0TDA
sNTEyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzY2RTI2RjsiIGQ9Ik0wLDUxMmwxNDguMzMzLTUxLjkxN2MzNi4xMjQsMTkuOTM4LDc2L
jkwNCwzMC40NDQsMTE4LjQwMywzMC40NDQNCgljNjUuNTEyLDAsMTI3LjEwNC0yNS41MTIsMTczLjQyNy03MS44MzZTNTEyLDMxMC43NzY
sNTEyLDI0NS4yNjNTNDg2LjQ4OSwxMTguMTYsNDQwLjE2NCw3MS44MzZMMCw1MTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGO
yIgZD0iTTIxMS4wMTgsMzAwLjk4MmM1OC42NDIsNTguNjQyLDEyNS4xOTUsODcuMTY1LDE0OC42NTIsNjMuNzA4bDI4LjMxNC0yOC4zMTQ
NCgljNS44NjQtNS44NjQsNS44NjQtMTUuMzcyLDAtMjEuMjM2bC0zNS4zOTMtMzUuMzkzYy01Ljg2NC01Ljg2NC0xNS4zNzItNS44NjQtM
jEuMjM2LDBsLTIxLjIzNiwyMS4yMzYNCgljLTQzLjQ4Ny0yMC41OTktNzguNTAyLTU1LjYxNS05OS4xMDEtOTkuMTAxbDIxLjIzNi0yMS4
yMzZjNS44NjQtNS44NjQsNS44NjQtMTUuMzcyLDAtMjEuMjM2bC0zNS4zOTMtMzUuMzkzDQoJYy01Ljg2NC01Ljg2NC0xNS4zNzItNS44N
jQtMjEuMjM2LDBsLTI4LjMxNCwyOC4zMTRDMTIzLjg1MywxNzUuNzg3LDE1Mi4zNzYsMjQyLjM0LDIxMS4wMTgsMzAwLjk4MnoiLz4NCjx
wYXRoIHN0eWxlPSJmaWxsOiNEQ0Y0RkY7IiBkPSJNMzg3Ljk4NSwzMTUuMTRsLTM1LjM5My0zNS4zOTNjLTUuODY0LTUuODY0LTE1LjM3M
i01Ljg2NC0yMS4yMzYsMGwtMjEuMjM2LDIxLjIzNg0KCWMtMjEuNzQzLTEwLjI5OS00MS4zNjgtMjQuMjAzLTU4LjEzMy00MC45NjhsLTQ
wLjk2OCw0MC45NjhsMCwwYzU4LjY0Miw1OC42NDIsMTI1LjE5NSw4Ny4xNjUsMTQ4LjY1Miw2My43MDhsMjguMzE0LTI4LjMxNA0KCUMzO
TMuODQ5LDMzMC41MTEsMzkzLjg0OSwzMjEuMDA0LDM4Ny45ODUsMzE1LjE0eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9
nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+D
Qo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                        </Divider>



                    </div>
                </Col>

                <Col>
                    <Row>
                        <div >
                            <Divider>
                                <img style={{width: 50}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU1MS4wMzQgNTUxLjAzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUxLjAzNCA1NTEuMDM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNzUuNTE3IiB5MT0iNC41NyIgeDI9IjI3NS41MTciIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pOyIgZD0iTTM4Ni44NzgsMEgxNjQuMTU2QzczLjY0LDAsMCw3My42NCwwLDE2NC4xNTZ2MjIyLjcyMg0KCQljMCw5MC41MTYsNzMuNjQsMTY0LjE1NiwxNjQuMTU2LDE2NC4xNTZoMjIyLjcyMmM5MC41MTYsMCwxNjQuMTU2LTczLjY0LDE2NC4xNTYtMTY0LjE1NlYxNjQuMTU2DQoJCUM1NTEuMDMzLDczLjY0LDQ3Ny4zOTMsMCwzODYuODc4LDB6IE00OTUuNiwzODYuODc4YzAsNjAuMDQ1LTQ4LjY3NywxMDguNzIyLTEwOC43MjIsMTA4LjcyMkgxNjQuMTU2DQoJCWMtNjAuMDQ1LDAtMTA4LjcyMi00OC42NzctMTA4LjcyMi0xMDguNzIyVjE2NC4xNTZjMC02MC4wNDYsNDguNjc3LTEwOC43MjIsMTA4LjcyMi0xMDguNzIyaDIyMi43MjINCgkJYzYwLjA0NSwwLDEwOC43MjIsNDguNjc2LDEwOC43MjIsMTA4LjcyMkw0OTUuNiwzODYuODc4TDQ5NS42LDM4Ni44Nzh6Ii8+DQoJDQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjc1LjUxNyIgeTE9IjQuNTciIHgyPSIyNzUuNTE3IiB5Mj0iNTQ5LjcyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTU0KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMDlCM0QiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4zIiBzdHlsZT0ic3RvcC1jb2xvcjojQzc0QzREIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNiIgc3R5bGU9InN0b3AtY29sb3I6I0MyMTk3NSIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNzAyNEM0Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzJfKTsiIGQ9Ik0yNzUuNTE3LDEzM0MxOTYuOTMzLDEzMywxMzMsMTk2LjkzMywxMzMsMjc1LjUxNnM2My45MzMsMTQyLjUxNywxNDIuNTE3LDE0Mi41MTcNCgkJUzQxOC4wMzQsMzU0LjEsNDE4LjAzNCwyNzUuNTE2UzM1NC4xMDEsMTMzLDI3NS41MTcsMTMzeiBNMjc1LjUxNywzNjIuNmMtNDguMDk1LDAtODcuMDgzLTM4Ljk4OC04Ny4wODMtODcuMDgzDQoJCXMzOC45ODktODcuMDgzLDg3LjA4My04Ny4wODNjNDguMDk1LDAsODcuMDgzLDM4Ljk4OCw4Ny4wODMsODcuMDgzQzM2Mi42LDMyMy42MTEsMzIzLjYxMSwzNjIuNiwyNzUuNTE3LDM2Mi42eiIvPg0KCQ0KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQxOC4zMSIgeTE9IjQuNTciIHgyPSI0MTguMzEiIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8zXyk7IiBjeD0iNDE4LjMxIiBjeT0iMTM0LjA3IiByPSIzNC4xNSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                            </Divider>
                        </div>
                    </Row>
                </Col>
            </Row>







            <Row>
                <Col>
                    <Row>
                        <div >
                            <Button className='Button1' type="primary" href="https://www.facebook.com">
                                FACEBOOK
                            </Button>
                        </div>
                    </Row>
                </Col>

                <Col>
                    <div>
                        <Button className='Button2' type="primary" href="https://www.whatsapp.com/?lang=es">
                            WHATSAPP
                        </Button>

                    </div>
                </Col>

                <Col>
                    <Row>
                        <div >
                            <Button className='Button3' type="primary" href="https://twitter.com/login?lang=es">
                                TWITTER
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>

            <Divider>PREGUNTAS FRECUENTES</Divider>

            <Collapse accordion className='scroll'>
                <Panel header="Cuantos dias tengo para cancelar una cita ?" key="1">
                    <p>Por motivos administrativos y de dependencias de las leyes de comercio electronico
                        establece que los administradores de cualqueir sistema web o aplicacion movil puedan hacer uso
                        de las mismas y establecer un limitede de tiempo el cual sera establecido conforme a horarrio y disponibilidad de los
                        doctores y enfermeras.</p>
                </Panel>
                <Panel header="Que hago si por algun motivo llego tarde a una cita ?" key="2">
                    <p>Conforme a politicas de la empresa el limite de tiempo el cual una persona podra llegar tarde una persona a su cita
                        es de 30 minutos, luego de este tiempo el paciente tendra que admitir el pago de el 20% adicional del costo de su cita
                        para poder reagendar su cita en otro horario y/o doctor o doctora segun su caso</p>
                </Panel>
                <Panel header="Que debo realizar si el doctor no llega a la cita ?" key="3">
                    <p>Mediante un correo electronico a todas nuestras operadoras podra el paciente señalar cual departamento dicho doctor
                        o doctora no asistio con el fin de reagendar su cita o mas pronto posible sin recargo alguno, todos los gastos administrativos
                        correran por cuenta del doctor o doctora que este fuera.</p>
                </Panel>
            </Collapse>


        </div>
    );
};


export default QuestionsPage;