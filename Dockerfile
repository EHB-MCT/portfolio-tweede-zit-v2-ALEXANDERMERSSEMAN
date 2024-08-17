# Gebruik een lichte Node.js image
FROM node:18-alpine

# Zet de werkdirectory binnen de container
WORKDIR /app

# Kopieer de package.json en package-lock.json naar de container
COPY package*.json ./

# Installeer de Node.js afhankelijkheden
RUN npm install

# Kopieer de code naar de container
COPY . .

# Exposeer de poort waarop de applicatie draait
EXPOSE 2601

# Command om de applicatie te starten
CMD ["node", "app.js"]