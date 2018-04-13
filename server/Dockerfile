FROM node:8

ENV NODE_ENV=production

RUN git clone https://github.com/Muster-Suchen-und-Erkennen/muse-server.git \
    && sed -i 'sXlogfile:.*Xlogfile: "/var/log/muse.log",X' /muse-server/app/config/configurationValues.js \
    && sed -i 'sXlogDirectory:.*XlogDirectory: "/var/log",X' /muse-server/app/config/configurationValues.js
ADD databaseConnectionPool.js /muse-server/app/sqlClient/databaseConnectionPool.js
RUN cd muse-server/app \
    && npm install

CMD ["node", "/muse-server/app/app.js"]
