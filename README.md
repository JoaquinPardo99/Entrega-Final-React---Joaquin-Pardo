# Plastico Records E-commerce

**Plastico Records** es una aplicación de e-commerce creada con React, que permite a los usuarios navegar por un catálogo de discos de vinilo de música electrónica, agregarlos a un carrito de compras y simular una compra finalizando con la creación de una orden en Firebase.

## Características

- **Catálogo de Productos**: Navega por diferentes géneros de música electrónica.
- **Detalle del Producto**: Visualiza los detalles de cada producto, incluyendo su precio y descripción.
- **Carrito de Compras**: Agrega productos al carrito y ajusta la cantidad de cada uno, respetando el stock disponible.
- **Formulario de Compra**: Completa un formulario con tu información de contacto antes de finalizar la compra.
- **Simulación de Compra**: Al finalizar la compra, los datos se almacenan en Firebase y se muestra un mensaje de confirmación.
- **Persistencia en Firebase**: Los productos y las órdenes de compra se manejan a través de Firebase Firestore.

## Requisitos Previos

- **Node.js** y **npm**: Asegúrate de tener instalados Node.js y npm en tu sistema.

## Instalación

1. **Clona el repositorio** en tu máquina local:

   git clone

   cd plastico-records

2. **Instala las dependencias del proyecto**:

   npm install

3. **Inicia la aplicación en modo desarrollo:**:

   npm start

## Uso

- **Navegación**: Utiliza la barra de navegación para explorar las diferentes categorías de productos.
- **Agregar al Carrito**: Desde el detalle de cada producto, selecciona la cantidad y agrégalo al carrito.
- **Finalizar Compra**: En la página del carrito, completa el formulario y haz clic en "Comprar" para simular la compra.
- **Confirmación**: Al finalizar la compra, serás redirigido a una página de agradecimiento.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router DOM**: Manejo de rutas dentro de la aplicación.
- **Firebase**: Backend para almacenar productos y órdenes de compra.
- **Bootstrap**: Estilización y diseño responsivo.
