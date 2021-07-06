# build environment
FROM node:lts-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm cache verify
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /app
RUN npm run build --production

RUN npm install -g serve

EXPOSE 9106

CMD ["serve", "-s", "build"]

# # production environment
# FROM nginx:1.17-alpine
# COPY --from=build-env /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 9500
# CMD ["nginx", "-g", "daemon off;"]
