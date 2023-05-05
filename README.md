<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript project.
<br>Esta app corre un microservicio MQTT en un cliente NestJS que funciona como un cliente MQTT que puede recibir y publicar mensajes.<br>

## Si copian el repositorio

Tienen que ejecutar lo siguiente para que funcione correctamente en el estado actual en el que esta.
<br>Tambien tiene que haber un servicio MQTT broker en la URL indicada en main.ts y app.module.ts<br>
<br><b>Sin el MQTT broker corriendo en la url no va a funcionar, Yarn no va a poder desplegar el microservicio Nest MQTT</b><br>

## Instalar Dependencias

```bash
$ yarn install
```

## MQTT Broker

En mi caso estoy utilizando [Ecliple Mosquitto](https://mosquitto.org/).
<br>Mosquitto se esta corriendo en mi entorno WLS(linux) en Ubuntu como si fuera otro dispositivo en la red local utilizando el puerto 1883 para la telemetria de mensajes. <br>
<br>Esto puede ser cualquier dispositivo corriendo linux en la red local pero puede ser <br>
[Para instrucciones para instalar WSL](https://learn.microsoft.com/es-mx/windows/wsl/install)
<br> Asegurarse de instalar ubuntu(esta por defecto con ubuntu) porque el proceso con Debian es mas complicado <br>

# En la terminal de Ubuntu

```bash
# Para instalar mosquitto
$ commando(s) para instalar mosquitto

# Para confirmar que el servicio esta corriendo.
$ sudo systemctl status mosquitto

# En el output de este commando deberia de haber algo que diga que esta Activo en verde.

# Ahora hay que cambiar la configuracion de Mosquitto para que acepte mensajes anonimos 
# Tambien para especificar que escuche en el puerto indicado
# Generalmente ya esta  Seteado para que utilize el puerto 1883

$ sudo nano /etc/mosquitto/conf.d/default.conf

# Esto va a abrir el editor de texto para agregar las lineas que necesitamos agregar.
```
Una vez hecho esto ya deberia estar listo el entorno para inicializar la app de nest.

```bash
$ yarn start:dev # (Para que cualquier cambio que hagamos se este actualizando automaticamente mientras corre)
# o alternativamente
$ yarn start #Solo lo corre asi nada mas.
```
Aqui debio de haberse inicializado el Microervicio MQTT correctamente y ya con eso podemos empezar a probar cambiando el codigo para recibir diferentes topicos y mensajes y ejecutar diferentes acciones.

## Descripcion y explicacion
```typescript
# Descripcion


```
## Running the app
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod

```
## Agregar dependencias necesarias para la implememntacion mqtt si empiezan de cero
```bash
# microservices
$ yarn add @nestjs/microservices
# mqtt
$ yarn add mqtt
```
