FROM node:19-alpine


COPY client /app/client/
COPY client/package.json /app/client/


COPY server /app/server/
COPY server/package.json /app/server/


WORKDIR /app
RUN cd client && npm install
RUN cd server && npm install

CMD ["node", "server/app.js"]

test