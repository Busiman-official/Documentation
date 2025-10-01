# Use Hugo extended version
FROM klakegg/hugo:0.135.0-ext-alpine AS builder

WORKDIR /site
COPY . .
RUN hugo --minify

# Final stage
FROM nginx:alpine
COPY --from=builder /site/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
