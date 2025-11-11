# Etapa 1: Build de la aplicación Angular
FROM node:20-alpine AS build
WORKDIR /app

# Copiamos los archivos necesarios
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Compilamos la app en modo producción
RUN npm run build --prod

# Etapa 2: Servir con Nginx
FROM nginx:alpine
# Copiamos los archivos generados por Angular al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos un archivo de configuración de Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
