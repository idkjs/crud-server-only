## Running

1.  run `yarn install`
1.  run `docker-compose up -d`
1.  run `yarn deploy`
1.  run `yarn start`
1.  open `http://localhost:4005/playground` to run queries against app and db (prisma) endpoints.

## Frontend

1.  `cd frontend && yarn install`
2.  run `yarn start`

## Frontend with Docker

1.  Build image: `docker build --rm -f frontend/Dockerfile -t idkjs/crud-frontend:latest frontend`

2.  Run image on port 8080: `docker run --rm -d -p 8080:80 idkjs/crud-frontend:latest`
