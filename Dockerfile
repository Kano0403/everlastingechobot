from node:19

run mkdir -p /app
workdir /app

copy package*.json ./
run npm install

copy . ./

cmd ["node", "main.js"]
