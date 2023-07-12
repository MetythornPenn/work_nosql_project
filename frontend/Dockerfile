# Base image
FROM node:14.17.3

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm i -g @vue/cli

# Copy project files
COPY . .

# Build the Vue.js project
RUN npm run build

# Expose the production port
EXPOSE 80

# Run the production build
CMD [ "npm", "run", "client" ]

