// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  API_URL: 'https://api.hgbrasil.com/weather?woeid=455827',
  MOCK_API_DATA: {
    "by": "woeid",
    "valid_key": false,
    "results": {
      "temp": 27,
      "date": "29/01/2021",
      "time": "21:04",
      "condition_code": "27",
      "description": "Tempo limpo",
      "currently": "noite",
      "cid": "",
      "city": "São Paulo, SP",
      "img_id": "27n",
      "humidity": 47,
      "wind_speedy": "2.06 km/h",
      "sunrise": "05:43 am",
      "sunset": "06:55 pm",
      "condition_slug": "clear_night",
      "city_name": "São Paulo",
      "forecast": [
        {
          "date": "29/01",
          "weekday": "Sex",
          "max": 30,
          "min": 20,
          "description": "Tempo nublado",
          "condition": "cloud"
        },
        {
          "date": "30/01",
          "weekday": "Sáb",
          "max": 32,
          "min": 20,
          "description": "Tempo nublado",
          "condition": "cloud"
        },
        {
          "date": "31/01",
          "weekday": "Dom",
          "max": 32,
          "min": 20,
          "description": "Tempo nublado",
          "condition": "cloud"
        },
        {
          "date": "01/02",
          "weekday": "Seg",
          "max": 30,
          "min": 21,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "02/02",
          "weekday": "Ter",
          "max": 29,
          "min": 21,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "03/02",
          "weekday": "Qua",
          "max": 28,
          "min": 20,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "04/02",
          "weekday": "Qui",
          "max": 27,
          "min": 21,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "05/02",
          "weekday": "Sex",
          "max": 26,
          "min": 20,
          "description": "Tempestades",
          "condition": "storm"
        },
        {
          "date": "06/02",
          "weekday": "Sáb",
          "max": 20,
          "min": 18,
          "description": "Tempestades isoladas",
          "condition": "storm"
        },
        {
          "date": "07/02",
          "weekday": "Dom",
          "max": 20,
          "min": 17,
          "description": "Alguns chuviscos",
          "condition": "rain"
        }
      ]
    },
    "execution_time": 0.0,
    "from_cache": true
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
