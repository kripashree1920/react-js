# parcel
- Dev build
- local server
-HMR hot module replacement
-caching - faster build
-uses file watching algo : c++
-Image optimisation
-production build- minify the file for it (Bundling)
-compress file
-consisting hashing
-diffential bundling(support app in diff browsers/ supports old support)
-error handling
-can also host in https
- tree shaking -remove unsed code 



// recat element = oject => when its renderend to browser it becomes html
//JSX => in background creates element => oject => when its renderend to browser it becomes html
//React componentes => 2 type-> 1) class based component ( OLD) 2) functional based components(NEW)
//component composition


//Food App wireframe

/*
* Header
  - Food App logo
  - Nav bar(Home, About us , contact us, cart )
* Body
  - Search
  - Restuart-container
    - Rest cards
        - Restuart logo,
        - Rest name
        - ratings
        - time 
* Footer
  - CopyRights
  - Links

*/



Parcel
Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles
Namaste Food
/**

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard
 - Img
 - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact */
Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";

React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()
2 types Routing in web apps
Client Side Routing
Server Side Routing
Redux Toolkit
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector
Types of testing (devloper)
Unit Testing
Integration Testing
End to End Testing - e2e testing
Setting up Testing in our app
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom