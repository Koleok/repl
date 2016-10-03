FROM zzrot/alpine-node

COPY . /app

EXPOSE 9999

CMD cd /app && npm run server
