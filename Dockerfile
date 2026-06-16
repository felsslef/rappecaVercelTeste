FROM alpine:latest

ARG PB_VERSION=0.22.14

RUN apk add --no-cache \
    unzip \
    ca-certificates

# Baixa o PocketBase para Linux (que é o sistema do Fly.io)
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Expõe a porta padrão do PocketBase
EXPOSE 8080

# Inicia o PocketBase liberando conexões externas
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]