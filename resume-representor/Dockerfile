FROM node:22.14.0-bookworm-slim AS builder

ENV BACKEND_BASE_URL=http://resume-transporter:8000

WORKDIR /workspace

RUN npm install -g pnpm

COPY . .

RUN pnpm install && pnpm build

FROM node:22.14.0-bookworm-slim AS app

EXPOSE 3000

WORKDIR /app

COPY --from=builder /workspace/node_modules node_modules/

COPY --from=builder /workspace/build build/

CMD [ "node", "build" ]
