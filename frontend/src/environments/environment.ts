// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
