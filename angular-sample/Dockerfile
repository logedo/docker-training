#Image we strart from
FROM node:14 
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
#Copy server configuration
COPY server.js .
#Command on container initialization
CMD ["node", "server.js"]

