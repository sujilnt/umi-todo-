# Todo app using umi.js


## Description
A simple todo app using react. This was built to demonstrate how to build an app on tod of umi.js.


- [Libraries/Frameworks](#Libraries/Frameworks) 
- [Folder Structure](#FolderStructure)
- [Installation](#Getting Started)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

### Libraries/Frameworks
  <details>
      <summary>React</summary>
      <p>
        A JavaScript library for building user interfaces.<br/>
         <a href="https://reactjs.org/">Read more about react</a>
      </p>
  </details>
   <details>
      <summary>DVA.js</summary>
        <p>
           Lightweight front-end framework based on redux, redux-saga and react-router.
            (Inspired by elm and choo). Elm concepts: organize models with reducers, effects and subscriptions.
           <br/>
          - Using Dva-Loading to handle loading state automatically. <br/>
          <a href="https://github.com/dvajs/dva">Read more about dva</a>
        </p>
  </details>
  <details>
      <summary>umi.js</summary>
        <p>
           Lightweight front-end framework based on redux, redux-saga and react-router.
            (Inspired by elm and choo). Elm concepts: organize models with reducers, effects and subscriptions.
           <br/>
          - Using Dva-Loading to handle loading state automatically. <br/>
          - <a href="https://github.com/dvajs/dva">Read more about dva</a>
        </p>
  </details>
  <details>
      <summary>open Api (swagger)</summary>
        <p>
          Generate clients, servers, and documentation from OpenAPI 2.0/3.x documents. 
          With 50+ client generators, you can easily generate code to interact with any server which exposes an OpenAPI document.<br/>
          OpenAPI documents allow you to convert the metadata about your API into some other format.  
            - <a href="https://openapi-generator.tech/">Read more about open api</a>
        </p>
  </details>

## Folder Structure

Project Folder/File name  | Functionality                                                               
------------- |-----------------------------------------------------------------------------
mock  | mocking the api operations (get or delete operations) data for the todos.`(Proxies)` 
api_spec  | adding api spec for the api                                                 | 
api  | autogenerated code by swagger by inputing the `api_spec/ **.yml file`.                                                                
service  | grouping the apis and adding our own configurations like `basePath`.
pages/index.tsx  | React component
pages/style.less  | Component css styles
pages/models.ts  | handling state management  only for the particular page.
app.ts | injecting the dva and added dva-logger.



## Api Endpoints
path  | method
------------- |-----------------------------------------------------------------------------
Get /todos | getAllTodos
DELETE /todos | deleteTodosByIds

## Getting Started

Install dependencies,

```bash
$ yarn install
```

Start the dev server,

```bash
$ yarn start
```


### Note

 - By default, the model automatically gets plugged to the store.
 - In reducers under the hood the dva is using Immer.js (immutable data structure), so the config is added in .umirc.ts.
 - umi automatically add models/routes to the  store during runtime. During runtime , .umi is generated inside src/ folder.
