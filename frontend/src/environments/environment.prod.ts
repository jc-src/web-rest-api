export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
  config: {
    virtialMachine: {
      disk_type: {1: 'hdd', 2: 'ssd'}
    },
    sideMenu: [
      { id: 'vm-list', name: 'List VM`s', link: '/virtual-machines', active: false },
      { id: 'vm-add', name: 'Add VM', link: '/virtual-machines/add', active: false }
    ]
  }
};
