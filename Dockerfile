# Etapa 1: build
FROM node:20-alpine as builder
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Build de Angular usando la configuración por defecto (production)
RUN npm run build -- --project curseando-frontend

# Etapa 2: Servir con nginx
FROM nginx:alpine
COPY --from=builder /app/dist/curseando-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
