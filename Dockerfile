FROM node:14.15.4

#Copiar dependencias para instalar
COPY ["./src/package.json", "/app/"] 

#Ubicarse en el directorio
WORKDIR /app

RUN npm install

#Copiar demas archivos
COPY ["./src", "/app/"]

#Exponer puerto en el host anfitrion
EXPOSE 3000

#commandos
# CMD ["npx", "nodemon", "--legacy-watch", "app.js"]


# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# WORKDIR /home/node/app
# COPY api/package*.json ./  
# USER node  
# RUN npm install
# COPY --chown=node:node . .
