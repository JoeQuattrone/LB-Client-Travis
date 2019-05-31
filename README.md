# LyricBunny

## Preview

<img width="1619" alt="Screen Shot 2019-05-30 at 7 16 30 PM" src="https://user-images.githubusercontent.com/43793510/58671157-8d4ea380-830f-11e9-9652-62d53aea5009.png">

 [View live website](https://lyricbunny.herokuapp.com/)

 [View brief video explaining LyricBunny](https://www.youtube.com/watch?v=1iLZerSznxk&t=2s)

## What LyricBunny Is
LyricBunny is a lyric-searching website. Type in the name of any song and LyricBunny will find and present its lyrics (30% of the lyrics due to MusixMatch's API license). In addition to presenting lyrics, LyricBunny offers a "like" functionality that persists to the [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis) database. This feature allows LyricBunny to store data for the "most liked songs" and present it. The [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis) repo is essential for the full functionality of LyricBunny so you will be asked to clone it in the upcoming directions.

## Why I Built It
I built this application to implement a wide-range of my skills as a React developer in a fun and practical way. LyricBunny showcases many features and technologies of React Development. It contains technologies such as:

* `React-Router` - routing in React
* `Redux` - global state management
* `Thunk` - asynchronous dispatching
* `Enzyme` - Unit/Integration testing

Along with many more technologies.

## Getting Started

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS - ^11.3.0
NPM - ^6.4.1
Yarn - ^1.15.2 (Alternative to NPM)

```

### Installing
```
npm install or yarn install

```
### Database/API Setup
Go to [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis)'s README, follow the instructions, then come back here.

### 3. Start The Server With:
`npm start`
or
`yarn start`

If done correctly, you will be able to see the Most Liked Songs and Chart Topping Songs populated on the home page
<img width="1146" alt="Screen Shot 2019-05-31 at 11 19 41 AM" src="https://user-images.githubusercontent.com/43793510/58715984-13adc880-8396-11e9-9c37-9e4bb3d12f60.png">

## Running the tests
To run test run the following commands:
`npm test`
or
`yarn test`

### Break down into unit tests
These tests test isolated functionality inside LyricBunny.

An action test
```
Example

```

## Deployment
In order to deploy LyricBunny, you must first deploy the [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis) API (See instructions on [LB-API-Travis](https://github.com/JoeQuattrone/LB-API-Travis)'s README').

To deploy this application, you must change all API requests from localhost to the API's web address.

example
 ```
 http://localhost:3001/popular_songs
 to
 https://yourappname.com/popular_songs

```

  ## Built With




Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
