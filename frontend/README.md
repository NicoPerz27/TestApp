# TECHNICAL TEST

------------
## Fake Server

- Nos situamos sobre la carpeta de el fake server
	`cd Fake Server`

- intalamos las dependencias
 	`npm i`
	
- Iniciamos el servidor
	`npm start`

------------
## React(Frontend)

- Entramos a la carpeta "Frontend"
`cd frontend`

- Instalamos las dependencias
`npm i`

- Iniciamos el servidor
	`npm start`


## Test App

### Usuarios y contraseña para log-In
|  Admin | Worker2  | Worker3  | Worker4  |
| ------------ | ------------ | ------------ | ------------ |
| 1234  |  1234 | 1234  | 1234  |

------------



#### Admin
**SCAN QR** => Abre una funcion ligada a metodo post por axios para subir el qr de usuario a la base de datos, Revela el Scaner de QR para UX
**LOG-OUT**=> Cierre de sesion eliminando cookies y con verificacion de log-in

**LISTA DE PUNTOS** => Lista de cartas estilizada bootstraps ligada a base de datos mediante protocolo get iterando con funcion .map()

------------



#### Worker


**QR** => Boton ligado a funcion para generar codigo qr con el username de el trabajador, para almacenar en bd mediante metodo post

**LOG-OUT**=> Cierre de sesion eliminando cookies y con verificacion de log-in
