FROM node:20-alpine AS development

# Set working directory
WORKDIR /app

# Install dependencies
# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package*.json ./
# Prefer npm ci for cleaner installs if package-lock.json is present and up-to-date
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose port 3000 for Next.js dev server
EXPOSE 3000

# Start Next.js development server
# The -H 0.0.0.0 flag is important to make the server accessible from outside the container
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]
