FROM ubuntu
# from : images

MAINTAINER truong.doshi
# MAINTAINER: author

WORKDIR /app

#WORKDIR: create app image = mkdir app && cd app

RUN apt-get update

COPY . .

# COPY .. : copy all folder to app folder in image

CMD ["ts-node index.ts"]

# CMD : command line run when create container