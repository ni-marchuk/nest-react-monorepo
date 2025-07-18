FROM node:20-slim AS base

WORKDIR /app

COPY ../package.json ../package-lock.json* ./
COPY ../packages ./packages

RUN corepack enable && npm install

FROM base AS client
WORKDIR /app/packages/client
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM base AS server
WORKDIR /app/packages/server
EXPOSE 8000
CMD ["npm", "run", "start:dev"]
