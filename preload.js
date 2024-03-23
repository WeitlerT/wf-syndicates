const { contextBridge, ipcRenderer  } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
  },
  shell: {
    openExternal: (url) => ipcRenderer.send('open-external-link', url)
  }
});

if (module.hot) {
  module.hot.accept();
}