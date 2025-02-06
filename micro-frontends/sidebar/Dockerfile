FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps && npm cache clean --force
COPY . .
RUN npm run build


FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install serve
EXPOSE 3002
CMD ["npx", "serve", "-s", "dist", "-l", "3002"]