<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo API

1. Clonar proyecto de github.
2. `npm install`: Instalar librerias del proyecto
3. Clonar el archivo `.env.template` y renombrarlo a `.env`: copiar el archivo .env.template para agregar nuestros datos.
4. Levantar la base de datos de docker

```
docker-compose up -d
```

6. Levantar proyecto en NEST:

```
npm run start:dev
yarn start:dev

```

7. Ejecutar SEED

```
http://localhost:3000/api/seed
```

# Production notes:
