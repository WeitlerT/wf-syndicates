const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

const electronReload = require('electron-reload');
electronReload(__dirname);

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // Hide electron menu bar
  win.setMenuBarVisibility(false)
  // Open chrome dev tools
  win.webContents.openDevTools()
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})