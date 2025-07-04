# Dockerfile for A.S.P.I.R.E BVRITH - Development
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
# This uses the cache unless package files change
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Expose the port Vite runs on
EXPOSE 3000

# The command to start the dev server will be in docker-compose.yml

