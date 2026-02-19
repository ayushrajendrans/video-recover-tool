import electron from 'electron'

console.log('electron type:', typeof electron)
console.log('electron keys:', Object.keys(electron || {}).slice(0, 20))
console.log('electron default:', electron.default ? Object.keys(electron.default).slice(0, 10) : 'no default')
