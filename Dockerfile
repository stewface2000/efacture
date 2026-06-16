# Stage 1: Install dependencies and build
FROM node:20 AS builder
WORKDIR /app

# Copy dependency definition
COPY package.json package-lock.json ./
# Copy prisma schema so client is generated
COPY prisma ./prisma

# Install dependencies including devDependencies
RUN npm ci

# Copy project files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="file:/app/dev.db"

# Initialize and seed temporary database for static pages compilation
RUN npx prisma db push --accept-data-loss && node prisma/seed.js

# Build Next.js app
RUN npm run build


# Stage 2: Production image
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Install openssl for Prisma inside slim image
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Create database volume directory with write access for non-root users
RUN mkdir -p /data && chmod 777 /data


# Copy built application and production dependencies
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/prisma.config.ts /app/tsconfig.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public


EXPOSE 3000

# Startup command:
# 1. Run npx prisma db push to ensure database schema matches in the persistent volume
# 2. Run seed script to populate initial data if the database is newly created
# 3. Start Next.js server
CMD npx prisma db push --accept-data-loss && node prisma/seed.js && npm run start
