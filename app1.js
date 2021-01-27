'use strict';


const {app, BrowserWindow, ipcMain} = require('electron');

const path = require('path');
const url = require('url');
const net = require('net');



let mainWindow;
var socketClient

global.sharedObj = {myvar: "hellofrommainjs"};
    app.on('ready', () => {
        mainWindow = new BrowserWindow({
            height: 800,
            width: 1000, 
            webPreferences: {
                nodeIntegration: true
            }
        });
        mainWindow.loadURL('file://' + __dirname + '/index.html');
      // Open the DevTools.
      //mainWindow.webContents.openDevTools()
        mainWindow.webContents.send("lol","lol");
      // Emitted when the window is closed.
      mainWindow.on('closed', function () {
        socketClient.end();
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
      });

      /* Instance socket on create window 
      console.log('Try to connect');
      socketClient = net.connect({host:'192.168.0.237', port:40001},  () => {
        // 'connect' listener
        console.log('connected to server!');
        socketClient.write('world!\r\n');
      });

      socketClient.on('data', (data) => {
        console.log(data.toString());
        var person = JSON.parse(data);

        console.log('Hello '+person.prenom+"!");

      });
      socketClient.on('end', () => {
        console.log('disconnected from server');
      });*/

      //mainWindow.openDevTools();
    });
    app.on('before-quit',function(){
      socketClient.end();
    })