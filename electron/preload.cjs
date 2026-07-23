const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('secabDesktop', {
  saveJson: (payload) => ipcRenderer.invoke('save-json', payload),
  saveCsv: (csv) => ipcRenderer.invoke('save-csv', csv),
  fetchCartography: (payload) => ipcRenderer.invoke('fetch-cartography', payload),
  fetchArcgis: (payload) => ipcRenderer.invoke('fetch-arcgis', payload),
  archiveRecord: (record) => ipcRenderer.invoke('archive-record', record),
  loadArchiveIndex: () => ipcRenderer.invoke('load-archive-index'),
  reportError: (payload) => ipcRenderer.invoke('report-renderer-error', payload),
  createBackup: (payload) => ipcRenderer.invoke('create-auto-backup', payload),
  listBackups: () => ipcRenderer.invoke('list-auto-backups'),
  readBackup: (filePath) => ipcRenderer.invoke('read-auto-backup', filePath),
  openDataFolder: () => ipcRenderer.invoke('open-data-folder'),
  getHealth: () => ipcRenderer.invoke('app-health'),
  getLocation: () => ipcRenderer.invoke('desktop-geolocation'),
  chooseSimpleSyncFolder: () => ipcRenderer.invoke('choose-simple-sync-folder'),
  getSimpleSyncConfig: () => ipcRenderer.invoke('get-simple-sync-config'),
  scanSimpleSyncFolder: () => ipcRenderer.invoke('scan-simple-sync-folder')
});
