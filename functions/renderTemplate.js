//const url = require("url")
const path = require("path")
const dataDir = path.resolve(`${process.cwd()}${path.sep}`);
const templateDir = path.resolve(`${dataDir}${path.sep}/public/templates`);
require('dotenv').config()

module.exports = function (res, req, template, data = {})  {

    // const accountLoged = req.isAuthenticated() ? true : null;
 
     ////////Ejecuta el directorio con lo solicitado o manda error
     const urls = require("../config/urls.json")
     let assignObject = {
         account: data?.account,
         urls
     }
     try {
       res.render(
         path.resolve(`${templateDir}${path.sep}${template}`),
         Object.assign(assignObject, data)
       );
     } catch (err) {
       console.log(err);
     }
   };