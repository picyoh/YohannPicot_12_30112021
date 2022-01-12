![Logo SportSee](public/img/logo.svg) 
# SportSee App
This repo contains source code of React App for the sports analytics dashboard SportSee.

>SportSee App is a sport sessions reporting application. It synthetise sport activity in few charts.

## Getting started

### Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Installing / Getting started

To install project to your computer follow these command lines :

```bash
$ mkdir sportSeeApp 
$ cd sportSeeApp
$ git clone https://github.com/your_repo/P9-front-end-dashboard
$ git clone https://github.com/your_repo/YohannPicot_12_30112021
$ cd P9-front-end-dashboard && yarn
$ cd ../YohannPicot_12_30112021 && yarn
```

the code above will :
- Make a sportSee App directory
- Clone your micro-api fork
- Clone your react-app forks
- get into micro-api directory & install dependencies
- get into react-app directory & install dependencies

### Usage

You can launch the app from __YohannPicot_12_30112021__ directory with the following command line: 

```shell-session
$ yarn runBoth
```
- The `yarn runBoth` command will allow you to run React App with micro-api running on [http://localhost:3000](http://localhost:3000)  
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.  


## Configuration

React App can run with mocked datas. To configure it follow this instructions :  

### MockedData ON : 
#### mockedData 
Type: `Boolean`  
Default: `false`  
Location: `/src/services/dataManager.js` *on line 12* 

```js
// Mocked data option
const mockedData = true;
```
In this case open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

- The `yarn start` command will allow you to run React App in developpement mode with mocked Datas.  
You must set __mockedData__ option to __true__ on [data manager file](../../src/services/dataManager.js) (*/src/services/dataManager.js line 12* ) to run App with mocked datas.


## Features

This version of SportSee can display :  

- Bar chart for user daily activity.
- Line chart for weekly user average sessions duration.
- Radar chart for user performances.
- Pie chart for user daily scores.
- User consumptions.

## Contributing

Please feel free to contribute to the quality of this content.  
Any contributions you make to this effort are of course greatly appreciated.

### Your First Contribution
- Review a Pull Request
- Fix an Issue
- Update the documentation
- Make a website
- Write a tutorial


## Links

Here are the differents links and sources of the project:

- Project homepage: https://openclassrooms.com/fr/paths/314/projects/812/assignment
- Repository: https://github.com/picyoh/YohannPicot_12_30112021
- Micro-api repository: https://github.com/your_repo/P9-front-end-dashboard

- Issue tracker: https://github.com/picyoh/YohannPicot_12_30112021/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    picyoh@gmail.com.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!



## Licensing

The code in this project is licensed under MIT license.

MIT License

*Copyright (c) Facebook, Inc. and its affiliates.*

*Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:*

*The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.*

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*
