FROM golang:1.16

WORKDIR /app

COPY go.??? ./

RUN go mod download

COPY . .

RUN go build -o mini .

ENTRYPOINT ["./mini"]
