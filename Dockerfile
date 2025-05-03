# 1. Use official Node.js image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package*.json ./
COPY tsconfig.json ./
COPY tailwind.config.* ./
COPY postcss.config.* ./

# Install all deps (including devDeps)
RUN npm install

# 4. Copy the full project
COPY . .

# 5. Build the app
RUN npm run build

# 6. Final image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
