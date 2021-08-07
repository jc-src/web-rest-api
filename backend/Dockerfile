FROM golang:1.16
#ENV GOPATH=/go-app
#ENV GOROOT=/go-app
EXPOSE 3000

#RUN apt-get update && apt-get install -y mysql-client
RUN go get -u github.com/go-sql-driver/mysql

WORKDIR /go-app
COPY ./src .
#RUN go install

# RUN go build  -o /main
# CMD ["./main"]
        
CMD [ "go", "run", "main.go" ]

