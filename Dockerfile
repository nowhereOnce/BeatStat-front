# Usa imagen oficial de Node
FROM node:18

# Crea el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto de Vite
EXPOSE 5173

# Comando por defecto
CMD ["npm", "run", "dev"]
