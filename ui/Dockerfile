FROM node:carbon as builder

RUN npm install -g bower \
    && echo '{ "allow_root": true }' > /root/.bowerrc \
    && git clone https://github.com/Muster-Suchen-und-Erkennen/muse-ui.git \
    && cd muse-ui \
    && bower install

FROM httpd:2.4

COPY --from=builder /muse-ui/app/ /usr/local/apache2/htdocs/
