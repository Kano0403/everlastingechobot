from node:14-slim

workdir /app
copy package*.json ./
run npm install --production

copy . .

cmd ["node", "main.js"]
