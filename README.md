# Quiosco App con Next.js y TypeScript

Este proyecto es una aplicación web moderna diseñada para gestionar un sistema de quiosco, permitiendo la administración de productos, categorías y pedidos. Está construido utilizando tecnologías de última generación como **Next.js**, **TypeScript**, y **Prisma**, ofreciendo una experiencia de desarrollo escalable, eficiente y con tipado estático.

## Características principales

### 1. **Gestión de productos**
- Permite crear, editar y eliminar productos.
- Soporte para asignar categorías a los productos.
- Carga de imágenes de productos utilizando **Cloudinary**.

### 2. **Búsqueda y filtrado**
- Funcionalidad de búsqueda de productos por nombre.
- Filtrado de productos por categorías.

### 3. **Notificaciones**
- Implementación de notificaciones amigables para el usuario utilizando **React Toastify**.

### 4. **Interfaz de usuario moderna**
- Estilizada con **TailwindCSS** para un diseño responsivo y moderno.
- Uso de componentes reutilizables como tablas, formularios y tarjetas de productos.

### 5. **Base de datos**
- Gestión de datos con **Prisma ORM**.
- Soporte para relaciones entre productos y categorías.
- Script de seed para poblar la base de datos con datos iniciales.

### 6. **Estado global**
- Manejo del estado global de la aplicación utilizando **Zustand**.

### 7. **Optimización**
- Desarrollo rápido con **Turbopack**.
- Linting y formateo del código con **ESLint**.

## Tecnologías utilizadas

- **Next.js** (v15): Framework de React para renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
- **TypeScript**: Tipado estático para un desarrollo más seguro y escalable.
- **Prisma**: ORM para la gestión de la base de datos.
- **React Toastify**: Notificaciones personalizables.
- **Zustand**: Manejo de estado global.
- **TailwindCSS**: Framework de CSS para diseño responsivo.
- **Cloudinary**: Almacenamiento y gestión de imágenes.
- **SWR**: Manejo de datos con revalidación automática.

## Estructura del proyecto

```plaintext
quiosco-next-ts/
├── app/                     # Directorio principal de páginas y layouts
│   ├── admin/               # Páginas de administración
│   ├── order/               # Páginas de pedidos
│   └── layout.tsx           # Layout principal de la aplicación
├── components/              # Componentes reutilizables
│   ├── products/            # Componentes relacionados con productos
│   └── ui/                  # Componentes de interfaz de usuario
├── prisma/                  # Configuración y esquema de Prisma
│   └── seed.ts              # Script para poblar la base de datos
├── public/                  # Archivos públicos (imágenes, etc.)
├── styles/                  # Archivos de estilos globales
├── [package.json](http://_vscodecontentref_/1)             # Dependencias y scripts del proyecto
└── [README.md](http://_vscodecontentref_/2)                # Documentación del proyecto
```

## Instalación y configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/quiosco-next-ts.git
   cd quiosco-next-ts
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:
   ```
   DATABASE_URL=tu_url_de_base_de_datos
   CLOUDINARY_CLOUD_NAME=tu_nombre_de_cloudinary
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret
   ```

4. Ejecuta las migraciones de Prisma:
   ```bash
   npx prisma migrate dev
   ```

5. Pobla la base de datos con datos iniciales:
    ```bash
    npx prisma db seed
    ```

6. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm start`: Inicia la aplicación en modo producción.
- `npm run lint`: Ejecuta el linter para verificar el código.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz un push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT.

¡Gracias por usar Quiosco App con Next.js y TypeScript! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue.