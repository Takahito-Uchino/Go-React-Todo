FROM --platform=linux/amd64 node:20-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/amd64 node:20-slim

WORKDIR /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/public ./public

CMD [ "npm", "start" ]
