# WeatherApp

This is a webpage of a weather application, currently with 2 API-s and fetching data of different cities and their current weather state. You can search your city's current weather.

### Main Tools
- Angular 14
- Typescript
- Sass
- OpenWeather API - to get data of the searched city
- Geocoding API - to get longitude latitude of a city (city dependent search mechanism)

City Below 15 Celsius
![16-11-2022-WeatherApp](https://user-images.githubusercontent.com/88943189/202256058-2b65c2fa-cd40-48d6-8ca5-c5d7375fe33c.png)

City Above 15 Celsius
![16-11-2022-WeatherApp-Warm](https://user-images.githubusercontent.com/88943189/202256363-efab44a1-67fb-4f06-afbe-ca869b5c1edb.png)

## Development - Day 1 - 16/11/2022

### Challenge and Results
- Components are in different folders - have reusable components
- Models interface - give a structure for fetched data
- Service to communicate with API and Components
- Environment variables to store baseUrl - HttpHeader and Params
- Use of HttpClientModule
- Nested clean structure with Sass
- Assets/Images folder for Resources
- Have possibility to do Routing in the future

### Challenge to do
- Make the request asnyc so the second API waits the first
- Make the Search-field component ready and seperate data in components. Make two-way, one-way databinding
- Communication with Parant <--> Child

## Development - Day 2 - 21/11/2022

### Challenge and Results
- Working with NgRx - still need to improve about operators, asnycron requests (2 fetch)
- Github detached head - merge conflict problem solved
- Now fetch waits the others so it's kinda asyncron - will have to rework with NgRx

### Challenge to do
- Form is a different component and states, fetch, methods are working individually in different components (Started - Git disaster happened - fixed)
- Need to master @Input and @Output + NgRx Operators and Observables
