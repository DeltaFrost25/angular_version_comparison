# Ejemplo de Lazy Loading Modules en Angular

Este proyecto es un ejemplo de cómo Angular carga sus módulos utilizando Angular 16.2.

## Dependencias Necesarias

Para ejecutar este proyecto, necesitarás las siguientes dependencias:

- [Node.js](https://nodejs.org/es/): Un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
- [NPM](https://www.npmjs.com/): Un gestor de paquetes para Node.js, utilizado para instalar módulos.
- [Angular CLI](https://cli.angular.io/): Una interfaz de línea de comandos para Angular, utilizada para crear y gestionar proyectos de Angular.

## Ejecutando el Proyecto

Para ejecutar este proyecto:

1. Instala las dependencias con `npm install`
2. Sirve la aplicación con `ng serve`
3. Abre tu navegador en `http://localhost:4200`

## Lazy Modules

Cuando ejecutas `ng serve`, Podrás notar que "Lazy Chunk Files" incluye ahora los componentes standalone en vez de módulos, esto permite una mayor optimización a la hora de renderizar la aplicación, ya que solo se va a cargar lo que es extrictamente necesario en el navegador.

![Componentes](https://github.com/DeltaFrost25/angular_version_comparison/assets/63409989/d9b43639-729e-4c0e-8191-4de388204dcf)

Cuando abres la aplicación en el navegador, puedes notar que la aplicación carga los elementos necesarios y posteriormente va cargando cada Lazy Chunk File cuando se requiera, lo cual es mucho más eficiente.

![Chunks](https://github.com/DeltaFrost25/angular_version_comparison/assets/63409989/7ea2b9bf-9e03-4bb1-86e6-c2d17bad23d3)

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI usa `ng help` o visita el README de Angular CLI.
