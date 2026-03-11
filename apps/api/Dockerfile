FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY apps/api/package*.json apps/api/
COPY packages/shared/package*.json packages/shared/
RUN npm install
COPY . .
RUN npm run build --workspace @trinix/api
EXPOSE 5000
CMD ["npm", "run", "start", "--workspace", "@trinix/api"]
