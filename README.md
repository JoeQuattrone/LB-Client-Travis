# LyricBunny  [![Build Status](https://travis-ci.org/JoeQuattrone/LB-Client-Travis.svg?branch=master)](https://travis-ci.org/JoeQuattrone/LB-Client-Travis)
A lyric-searching website built with React that utilizes a Rails API. Type in the name of any song and LyricBunny will find and present its lyrics (30% of the lyrics due to MusixMatch's API license). In addition to presenting lyrics, LyricBunny offers a "like" functionality that persists to the [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis) database. This feature allows LyricBunny to store data for the "most liked songs" and present it. The [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis) repo is essential for the full functionality of LyricBunny so you will be asked to clone it in the upcoming directions.

## Preview

<img width="1619" alt="Screen Shot 2019-05-30 at 7 16 30 PM" src="https://user-images.githubusercontent.com/43793510/58671157-8d4ea380-830f-11e9-9652-62d53aea5009.png">

 [View live website](https://lyricbunny.herokuapp.com/)

## Why I Built It
I built this application to implement a wide-range of my skills as a React developer in a fun and practical way. LyricBunny showcases many features and technologies of React Development.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

```
NodeJS - ^11.3.0
NPM - ^6.4.1
Yarn - ^1.15.2 (Alternative to NPM)
```

### Installing
`npm install`
or
`yarn install`

### Database/API Setup
Go to [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis)'s README, follow the instructions, then come back here and continue on to the next step.

### Start The Server With:
`npm start`
or
`yarn start`

<img width="1146" alt="Screen Shot 2019-05-31 at 11 19 41 AM" src="https://user-images.githubusercontent.com/43793510/58715984-13adc880-8396-11e9-9c37-9e4bb3d12f60.png">

If done correctly, you will be able to the **Chart Topping Songs** populated on the home page

## Running the tests
To run test run the following commands:
`npm test`
or
`yarn test`

### Break down into unit tests
These test isolated functionality inside LyricBunny.

A simple unit test:
```
describe('<SongSearch />', () => {
  it('has default state {songTitle: ""}', () => {
    const wrapper = shallow(<SongSearch />)
    expect(wrapper.state().songTitle).toEqual('')
  })
```
This test verifies that the component *SongSearch* has an initial state of `{songTitle: ""}`

## Deployment
*In order to deploy LyricBunny, you must first deploy the [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis) API (See instructions on [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis)'s README).*

To deploy this application, you must change all API requests from localhost to the API's web address.

Example:
 ```
 http://localhost:3001/popular_songs
 to
 https://yourappname.com/popular_songs
```

## Built With
* [React](https://reactjs.org/) - The web framework used
* [Redux](https://redux.js.org) - Global state management
* [Thunk](https://github.com/reduxjs/redux-thunk) - Middleware for Redux
* [Enzyme](https://github.com/airbnb/enzyme) - Testing utilities for React

## Authors

* **Joe Quattrone** - *Initial work* - [Portfolio](http://joequattrone.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
