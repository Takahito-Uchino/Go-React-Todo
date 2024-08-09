FROM golang:1.22 as builder

WORKDIR /build

COPY go.mod .
COPY go.sum .
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 go build -o main .


FROM gcr.io/distroless/static-debian12

WORKDIR /root/

COPY --from=builder /build/main .

EXPOSE 8080

CMD [ "./main" ]
