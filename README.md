# Aplicación de Sistema de Créditos "Invested"

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Investigación UX](#2-investigación-ux)
* [3. Herramientas implementadas](#3-primer-herramientas-implementadas)
* [4. Flujo de la Aplicación ](#4-flujo-de-la-aplicacion)    
* [5. Imagen de la vista 1](#5-imagen-de-la-vista-1)
* [6. Imagen de la vista 2](#6-imagen-de-la-vista-2)
* [7. Imagen de la vista 3](#7-imagen-de-la-vista-3)
* [8. Imagen de la vista 4](#8-imagen-de-la-vista-4)


***

## 1. Resumen del proyecto

La temática del proyecto consiste en un sistema de créditos que contiene clientes registrados;
y permite dar de alta a nuevos clientes que requieran un crédito determinado.
Los usuarios registrados tienen la opción de solicitar más de un crédito, siempre y cuando cada 
monto solicitado sea cubierto en 4 parcialidades;la aplicación permite visualizar cuentas liquidadas,
pagos realizados, así como usuarios que no han aportado ningún pago.

## 2. Investigación UX

Esta aplicación es dirigida a todas aquellas personas que tengan la intensión de alcanzar un bienestar 
financiero, que les permita mejorar su situación y el de su entorno. 
El usuario podrá desplazarse por toda la página, sin problema alguno, ya que es amigable y ágil.

## 3. Herramientas Implementadas

En el comienzo de la aplicación había decidido realizar el proyecto mediante: CSS, HTML, JAVASCRIPT Y REACT.
Después decidí agregar BOOTSTRAP (anteriomente nunca lo había usado) para familiarizarme y conocer en práctica 
las herramientas que brinda este libreria, fue un gran reto.

## 4. Flujo de la Aplicación

La gestión de la app se desarrolló partiendo de las operaciones CRUD. 
Para el almacenamiento de datos se usó la memoria del navegador (no incluye backend).
**Login** es la primera layout de la app, para ingresar se necesita un número de empleado y contraseña que se encuentran en el objeto mockUser: employee: **00153**  password: **srl_58**. 
Se negará el acceso a empleados no registrados en mockUser.

Segunda vista de la app es **Users**, layout donde el empleado podrá visualizar a usuarios registrados(RFC, Nombre, Teléfono y Acciones) así como editar, borrar y ver créditos. También podrá agregar a nuevos clientes.

Al momento de dar click en ver créditos, la ruta dirigirá al empleado a la tercera vista **Credit** en donde tendrá acceso a ver (Id, Crédito solicitado, Parcialidades pagadas, Monto pagado, Monto restante y Estado)  así como editar y borrar esos campos. Igualmente tendrá la opción de agregar un nuevo crédito.

## 5. Imagen de la vista 1
![Imagen de la vista 1](imagen/inves1.png)


## 6. Imagen de la vista 2
![Imagen de la vista 2](imagen-inve-2.png)

## 7. Imagen de la vista 3
![Imagen de la vista 3](imagen-inves-3.png)

## 8. Imagen de la vista 4
![Imagen de la vista 4](imagen-inves-4.png)
