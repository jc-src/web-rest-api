# web-rest-api
Golang and Angular demo web

# Demo project

1. Frontend Angular v12
2. Backend GoLang v1.16
3. Database MariaDB v10.6

# Developer

1. Start backend: docker-compose up -d
2. Use your favorite mysql to connect to the DB and be able to add the scema ( ./documentation )
2. Frontend, can take a bit as it uses "npm run play" command so it can compile  , you can also run npm install & npm serve

check frontend logs with
`docker logs -f  frontend`

Database setup
```yaml
      MARIADB_ROOT_PASSWORD: root_password
      MARIADB_DATABASE: rest_api
      MARIADB_USER: rest_user
      MARIADB_PASSWORD: rest_password
```

There is a multistage docker image for GO and Angular ( Dockerfile.prod ) 

If you wish to just build and run backend do,
`docker-compose up -d backend`

:)

# TODO's
A lot!

