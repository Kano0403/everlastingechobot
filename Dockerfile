from python:3.9-slim

workdir /app
copy . /app
run pip install --no-cache-dir -r requirements.txt

cmd ["python", "app.py"]
