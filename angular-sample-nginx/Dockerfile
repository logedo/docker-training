#Stage 1
#Image we strart from
FROM node:14 as nodebuild
#Create /app in the image
RUN mkdir -p /app
#Set working dir
WORKDIR /app
#Copy source code
COPY heroes /app
#Angular npm install acording to angular verion 
RUN npm install
#Build distribuion
RUN npm run build --prod

#Stage 2
FROM nginx:1.21.6
#Copy from stage 1
COPY --from=nodebuild /app/dist /usr/share/nginx/html