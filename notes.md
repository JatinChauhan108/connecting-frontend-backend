# Importing Express
- Express is composed of multiple js files and they cannot be called outside a module
- Hence, in order to import express by the normal import statement(instead of require('express')), we must set type = module in the package.json file.

## Standardization
- Instead of this
```js
app.get('/jokes',(req, res) => {})
```
- Use this
```js
app.get('/api/jokes',(req, res) => {})
```

# Axios
- For sending request to a server, we may use fetch or axios.
- The advantage of axios over fetch is that axios provides special functionalities.
- It is a library specially written for web requests
- It provides production level features.

# CORS Error
- While accessing resources from a different origin(different domain name or port), an error occurs called CORS error.
- One solution to avoid this error is to whitelist our frontend URL in the backend configuration using cors utility of npm.
- Another solution is to use proxies.

# Proxies
- Instead of using 
```js
axios.get('http://localhost:3000/api/jokes')
```
- Use
```js
axios.get('/api/jokes')
```
- And assign a proxy in vite.config.js file of the frontend package
- '/api' : 'http://localhost:3000'
- This would do 2 things:
    - Append the URL before /api in all the referrences of /api in our frontend package
    - Request the server for resources through this origin only
    - Since the server is also from this origin, CORS error would not occur.

# Bad Practice
- Vite is one of the bundlers which combines all the js files written in the vite application
- When we build our vite application, a new distribution folder gets created, which contains our bundled js file along with html and css file
- This folder can be transferred to the backend package.
- Then, a middleware can be used in the server, through which we can serve a static asset, which is this same distribution folder
- But, the problem is that, whenever there are some changes made in the frontend, they won't be reflected at the server.