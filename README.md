# Ejemplo de detección de cambios en Angular (OnPush)

Este proyecto es un ejemplo de cómo Angular detecta los cambios en los componentes.

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

## Change Detection OnPush

Cuando ejecutas `ng serve`, Podrás notar que una familia de componentes, si presionas clic en el boton de "increment" notaras que angular no checkea los cambios en ninguno de los componentes que no cumplen las condiciones de detección de cambios, por lo tanto, el contador no se actualiza tampoco.

![beforeChange](https://github.com/DeltaFrost25/angular_version_comparison/assets/63409989/fa325668-9400-4b8e-a8a6-8fe6db0717c4)

En la siguiente imagen puedes los componentes afectados.

![afterChange](https://github.com/DeltaFrost25/angular_version_comparison/assets/63409989/8071588e-2ad5-4659-bf32-e7d01a256e78)

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI usa `ng help` o visita el README de Angular CLI.
