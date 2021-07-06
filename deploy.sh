#!/bin/bash
cd /opt/spacia/spaces-b2b-portal-sandbox
git checkout master
git pull
docker stop spacia_dev
docker rm spacia_dev
docker rmi spacia_dev
docker build -t spacia.dev .
docker run -d --restart=always --name=spacia_dev --memory=256mb --network=spacia_network --ip=172.15.0.20 --hostname=spacia.dev -p 9106:3000 --link=spacia_kafka spacia.dev
docker logs --follow spacia_dev
