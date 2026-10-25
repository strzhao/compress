# syntax=docker/dockerfile:1.7
# compress 自托管部署（Next.js standalone，纯浏览器端工具：无 DB / 无 env / 无 cron）
# local build：docker buildx --platform linux/amd64 -f deploy/Dockerfile -t compress:latest --load .
# （vps-ops 管线：镜像本地构建 → save|gzip|ssh load → compose up --no-build）

# ---------- base ----------
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---------- deps ----------
FROM base AS deps
COPY package.json package-lock.json ./
# 容器内直连 registry.npmjs.org 不稳（little-ant 实录），固定 npmmirror 镜像源
RUN npm config set registry https://registry.npmmirror.com && npm ci

# ---------- builder ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# 触发 next.config.ts 的 output:'standalone'
ENV DOCKER_BUILD=1
RUN npm run build

# ---------- runner ----------
FROM node:22-alpine AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3005 HOSTNAME=0.0.0.0

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3005
CMD ["node", "server.js"]
