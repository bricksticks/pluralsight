FROM golang:1.16 AS base

FROM base AS lint
COPY linter/golangci-lint /go/bin/
WORKDIR /app
CMD ["golangci-lint", "run"]

FROM base AS build
WORKDIR /app
COPY go.??? ./
RUN go mod download
COPY *.go ./
RUN go build -o mini .

FROM alpine:3
COPY --from=build /app/mini /
ENTRYPOINT ["./mini"]
