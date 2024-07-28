1. AWS Login
2. Create Instance.
3. Elastic IP

Ubuntu Machine from Microsoft Store

1. Open the Start menu and search for "Windows features".
2. Select "Turn Windows features on or off" from the search results.
3. Scroll down and locate "Windows Subsystem for Linux and Virtual Machine Platform".

4. Check the box next to it and click "OK".
5. Restart your computer when prompted.

Enter your username : 
Enter your password : 


5. Connect Instance from the Command Prompt.
6. Install Node

Command
sudo apt update
sudo apt install curl gnupg2
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v


sudo npm install pm2@latest -g

sudo apt update
sudo apt install nginx


cd /etc/nginx/sites-available/


sudo nano server.conf

server {
  listen 80;
  listen [::]:80;

  server_name 13.201.210.134;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

}

sudo unlink /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/server.conf /etc/nginx/sites-enabled/
sudo nginx -t # Check Nginx configuration for errors
sudo systemctl restart nginx


6. clone project from bitbucket

git clone xyz.com

ashapurna
cd ashapurna
npm run build


pm2 start npm --name=project_name -- start   // npx use
pm2 start --name=project_name npm -- run dev // vite react use


cd ashapurna
git pull origin master

pm2 list || pm2 status
pm2 stop project_name - to stop
npm run build
pm2 start project_name - to start

pm2 restart
pm2 delete 

4. Security Group.


Node Project Setup

location /node/ {
  include proxy_params;
  proxy_pass http://localhost:8000/;
  proxy_read_timeout 3000s;
}


pm2 start --name 'projectName' server.js

npx kill-port 8000