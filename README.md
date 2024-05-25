# Plantilla de Next.js + TypeScript con Autenticación JWT, MercadoPago, PrismaORM, Next-Theme, Shadcn/UI, Redux/Toolkit y TailwindCSS

Esta plantilla es ideal para desarrolladores que desean crear una aplicación web con Next.js. Incluye las siguientes funcionalidades:

![Post](https://template-nextjs-v1.vercel.app/assets/photos/photo-template-next.png)

## Características clave

1. **Autenticación JWT**:

   - Registro de usuarios con validación de campos.
   - Inicio de sesión con generación de tokens JWT.
   - Protección de rutas privadas mediante middleware.

2. **MercadoPago**:

   - Esta plantilla viene con el SDK de MercadoPago ya integrado, listo para ser configurado y usado en tus proyectos
   - La configuración de MercadoPago se encuentra en la ruta `/utils/MercadoPago/mp.ts`, donde puedes establecer tus credenciales y personalizar las opciones según tus necesidades.

3. **Prisma ORM**:

   - Prisma es un mapeador de objetos relacionales (ORM) de código abierto para Node.js y TypeScript. Te proporciona una forma sencilla y segura de interactuar con tu base de datos.
   - Con Prisma, puedes definir tu esquema de base de datos utilizando el lenguaje de definición de esquema de Prisma (Prisma Schema Language). Luego, Prisma genera automáticamente un cliente de base de datos en TypeScript que puedes usar para interactuar con tu base de datos de manera segura.
   - Prisma soporta una variedad de bases de datos SQL y NoSQL, incluyendo PostgreSQL, MySQL, SQLite y más. Esto te permite elegir la base de datos que mejor se adapte a tus necesidades sin tener que preocuparte por la compatibilidad.

4. **Next-Theme**:

   - Alternancia de temas (modo claro y oscuro).
   - Personalización de colores y estilos.

5. **Shadcn/UI**:

   - Componentes reutilizables para botones, formularios, tarjetas, etc.
   - Estilos modernos y atractivos.
   - Integración sencilla con Next.js.

6. **Sass**:

   - Por si no te gusta TailwindCSS la plantilla tambien viene con `SASS` integrado.
   - Sass es un preprocesador CSS que te permite usar características que no existen en CSS, como variables, anidamiento, mixins, herencia, etc.

7. **Redux/Toolkit y React-Redux**:

   - Bibliotecas para manejar el estado de la aplicación de manera predecible.
   - Redux Toolkit simplifica la configuración de Redux con utilidades para reducir la cantidad de código que debes escribir.

8. **Moment.js**:

   - Biblioteca para manipular fechas y horas en JavaScript.

9. **Framer-Motion**:

   - Biblioteca de animación para React que te permite animar elementos de tu interfaz de usuario.

10. **TailwindCSS**:

- Un marco de CSS de utilidad para la creación rápida de diseños personalizados.

## Demo:

![Demo](https://template-nextjs-v1.vercel.app/assets/photos/demo-next-white.png)

## Instrucciones de uso

Eres libre de añadir o eliminar módulos. Modifica todo el código que quieras, utiliza esta plantilla base para crear tu mejor proyecto.

## Instalación

Clona el repositorio:

```bash
  git clone https://github.com/Nico-Schonfeld/template-nextjs.git
  cd template-nextjs
```

Instala las dependencias:

```bash
  npm install
```

Levanta el proyecto:

```bash
  npm run dev
```

## Autor

- [@nicoschonfeld](https://nicoschonfeld.vercel.app/)
