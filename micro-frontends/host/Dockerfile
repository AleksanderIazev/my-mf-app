FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install serve
EXPOSE 3000
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]