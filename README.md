# Operative App
## Deployment
This application is build using `create-react-app`, this `README.md` describes how I deployed it.
### Instructions:

#### Creating a Digital Ocean Droplet:
- Create an ssh rsa key using `$ ssh-keygen -t rsa`.
- Create a droplet on **Digital Ocean** using pre-config of NodeJS.
- Copy the contents of `<your_ssh_key>.pub` while adding the ssh key for droplet.

#### Login and create new user:
- Login to it using `$ ssh -i <your_ssh_privatekey_path> root@<ip_address_of_droplet>`.
- After successful login, create new user using `$ adduser <username>`.
- Give this user `$ sudo` permissions using `$ usermod -aG sudo <username>`.
- Login with the new user account using `$ su - <username>`.

#### Setup SSH for the new user:
- Create a new directory `/home/<username>/.ssh` and set it's permissions using `$ chmod 700 ~/.ssh`.
- In this directory, create a new file named `authorized_keys`.
- Copy the contents of `<your_ssh_key>.pub` to this file.
- Set it's permissions using `$ chmod 600 ~/.ssh/authorized_keys`.

Logout from the server using `$ logout`.

#### Login to server using new account and update:
- Login using `$ ssh -i <your_ssh_privatekey_path> <username>@<ip_address_of_droplet>`.
- To update the system software, run `$ sudo apt update` then `$ sudo apt upgrade`.

#### Setup the project files:
- Clone the repository in this user's home directory using `$ git clone https://github.com/skb1129/operative-app.git`.
- Switch to `deployment` branch using `$ git checkout deployment`.
- Change directory into this repository directory.
- Run `$ npm i` to install the dependencies.

#### Setup PM2 to launch the application:
- Install PM2 using `$ sudo npm i -g pm2`.
- Now run the application using pm2 `$ pm2 start server.js`.
- Now the application is run by `pm2` in the background as server.
- To launch `pm2` at startup or reboot use `$ pm2 startup systemd`.
- Then run the command that comes in the output after the previous command is run.

#### Setup NGINX:
- Install `nginx` using `$ sudo apt install nginx`.
- Allow HTTP in the firewall: `$ sudo ufw allow 'Nginx HTTP'`.
- Next we need to setup `nginx` as reverse proxy server so that we don't need to put the port number in the URL to access the application.
- Open this file: `/etc/nginx/sites-available/default`.
- In this file, within the `server` block, find the `location /` block and replace it's contents with:
```
location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-NginX-Proxy true;
    proxy_pass http://localhost:8080;
    proxy_set_header Host $http_host;
    proxy_cache_bypass $http_upgrade;
    proxy_redirect off;
}
```
- Save and exit the editor.
- Test `nginx` for errors using `$ sudo nginx -t`.
- Then, restart `nginx` using `$ sudo systemctl restart nginx`.

#### Setup SSL:
For this to work, you need a fully registered domain name. You can get a free domain name from **No-IP**.
And this domain name should point to the Droplet's IP address.
- We are going to do this using **Certbot**.
- Add `certbot` repository using `$ sudo add-apt-repository ppa:certbot/certbot`.
- Run `$ sudo apt update`.
- Install `certbot` using `$ sudo apt install python-certbot-nginx`.
- Then, run `$ sudo certbot --nginx` to start the automated setup of SSL.
- Answer the questions asked by `certbot`.
- After the setup, logout of the server and open the application from URL: *https://<your_domain_name>*.


Now, you should be able to visit the application at <ip_address_of_droplet>.


Surya Kant Bansal  
skb1129@yahoo.com
