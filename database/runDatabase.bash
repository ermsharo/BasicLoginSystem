docker build -t database/demoapp:1.0 .
docker run -p 5432:5432 database/demoapp:1.0