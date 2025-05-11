FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json из backend
COPY backend/package*.json ./
COPY backend/prisma ./prisma/

RUN npm install

# Копируем остальные файлы бэкенда
COPY backend/ ./

# Копируем и собираем фронтенд
COPY frontend/ ../frontend/
WORKDIR /frontend
RUN npm install
RUN npm run build

# Возвращаемся в директорию бэкенда
WORKDIR /app

# Генерируем Prisma клиент
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "run", "dev"]