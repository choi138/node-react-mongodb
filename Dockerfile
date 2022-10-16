FROM node:16.17.1 
# FROM은 어떤 서버를 돌릴건지 정함 예) 파이썬, 노드
COPY . /app
# COPY는 전체파일을 복사해서 /app에 넣음
WORKDIR /app
# WORKDIR은 /app으로 이동
RUN npm install
# RUN은 npm install을 실행
EXPOSE 2000
# EXPOSE는 2000포트를 열어줌
CMD ["npm", "start"]
# CMD는 서버가 열리면 실행할것 npm start를 실행