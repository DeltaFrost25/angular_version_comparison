# Ejemplo de Standalone Components y carga diferida en Angular

Este proyecto es un ejemplo de cómo Angular carga componentes Standalone y el uso de @defer para carga diferida en angular +17.

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

## Standalone Components

Cuando ejecutas `ng serve`, Podrás notar que "Lazy Chunk Files" incluye ahora los componentes standalone en vez de módulos, esto permite una mayor optimización a la hora de renderizar la aplicación, ya que solo se va a cargar lo que es extrictamente necesario en el navegador.

![Componentes](https://github.com/DeltaFrost25/angular_version_comparison/assets/63409989/d9b43639-729e-4c0e-8191-4de388204dcf)

En la siguiente imagen puedes observar como se cargan los componentes standalone y como también cuando se hace click en el boton, el mismo carga el código de la gráfica, esta funcionalidad es posible gracias a la carga diferida por medio de @defer en angular.

![Defer](https://github.com/DeltaFrost25/angular_version_comparison/assets/63409989/bcfe0a2b-9c6c-44b1-bba0-54f6dee7ef33)

![AfterDefer](https://github.com/DeltaFrost25/angular_version_comparison/assets/63409989/e0680f5a-62ed-43dd-97bb-aac256b1b136)



## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI usa `ng help` o visita el README de Angular CLI.
