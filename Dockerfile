FROM node:20-alpine3.19 AS nodejs
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build
RUN echo 'works'

FROM alpine:3.19
COPY --from=nodejs /usr/app/build /app
RUN echo 'finish'
