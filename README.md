# comp-333-hw3
Single Page App for rating songs
Developed by Simon Chidley and Aaron Foote

# development
## backend:
Download XAMPP using [this link](https://www.apachefriends.org/download.html). Please note that macOS users must have the lastest software update.

If installing on MacOS, if you get a security warning, you may have to go to System Settings->Privacy & Security. If you see a box that says "xampp-osx-<version>-installer.app was blocked from use beacuse it is not from an identified developer", click "open anyways". Once installed, grant all permissions that are requested by the system as they pop up.

To run Manager-osx.app, go to Applications->XAMPP->xamppfiles->manager-osx.app. Once opened, go to the "Manage Servers" tab and start "MySQL Database" and "Apache Web Server". If there is a green dot next to them, that means the program is running.

Open the following link to access the localhost server: http://localhost/
Click the phpMyAdmin tab to open your database page. 
Create a new database titled 'music_db'.
In this new database, click on the SQL tab and enter the following code into the editor:

```sql
CREATE TABLE users (username VARCHAR(255) PRIMARY, password VARCHAR(255));
CREATE TABLE ratings (id INT(11) PRIMAY AUTO_INCREMENT, username VARCHAR(255), artist VARCHAR(255), song VARCHAR(255), rating INT(1));
```

On your system, go to Applications->XAMPP->xamppfiles->htdocs. You may remove all files in it, and create a new folder titled comp-333-hw3. Place all files from this repo **EXCEPT the src directory** into comp-333-hw3.

## frontend:
Download the latest version of [Node.js](https://nodejs.org/en/download/current) from the official site.

Ensure you have node and npm installed with the following commands:
```bash
node -v
```
```bash
npm -v
```

If you haven't already, globally install the create-react-app with the following command:
```bash
npm install -g create-react-app
```

In the preferred directory, run the following command to start the StarTunes app:
```bash
npx create-react-app startunes
```

Move to the startunes directory and replade the src folder with the one in the repo.
In startunes, run the following commands

```bash
npm install axios
```
```bash
npm install reactdom
```
**^This has to be double checked**

Finally, run the app with
```bash
npm start
```
This should automatocally open the app in your browser.
