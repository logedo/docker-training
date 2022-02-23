## Docker

### Basic Docker Commands​


```
 $ docker pull nginx:latest
 $ docker pull nginx:1.21.6
 $ docker images
 $ docker images | grep nginx
 $ docker run --name nginxTest -p 8080:80 nginx
 $ docker stop nginxTest
 $ docker start nginxTest​
 $ docker rm nginxTest
 $ docker --help

```


### Html Basic Example

Locate simple-html folder.

Define
```
FROM nginx:1.21.6
COPY . /usr/share/nginx/html
```

Build and run
```
docker build . -t frsweb
docker run -p 8080:80 frsweb
```

### Heroes Angular Example

Credits
https://angular.io/guide/example-apps-list


Locate angular-sample folder.
Build and run
```
docker build . -t heroes
docker run -p 8081:7071 heroes
```

Locate angular-sample folder.
Build and run
```
docker build . -t heroesnginx
docker run -p 8080:80 heroesnginx
```


### Heroes Angular Example with volumes

Run
```
docker run \
-v ${PWD}/heroes/dist:/usr/share/nginx/html \
-p 8082:80 \
nginx
```