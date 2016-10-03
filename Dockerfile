FROM zzrot/alpine-node

WORKDIR /app
COPY ./node_modules node_modules
COPY ./package.json package.json
COPY ./index.html index.html
COPY ./dist dist

EXPOSE 9999

CMD cd /app && npm run server
