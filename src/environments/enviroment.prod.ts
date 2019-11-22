// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  authUrl: 'https://api.pinterest.com/oauth/',
  redirectUri: 'http://localhost:4200/login',
  clientId: '5056877495467422745',
  tokenUri:'https://api.pinterest.com/v1/oauth/token',
  apiUri:'https://api.pinterest.com/v1/',
  clientSecret:'18d5cbc1e018c897e72837f2ed0e494c1598d88a76e9b77c895aceff92d68498'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
