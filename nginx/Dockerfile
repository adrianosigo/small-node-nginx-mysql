# Imagem base Nginx e Alpine
FROM nginx:1.15-alpine

# Remover o arquivo de configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar o arquivo de configuração do nginx
COPY nginx.conf /etc/nginx/conf.d

# Criar arquivo em branco para o index.html
RUN mkdir -p /var/www/html && touch /var/www/html/index.html
