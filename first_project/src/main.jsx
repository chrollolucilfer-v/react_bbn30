import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>THis is myapp</h1>
    </div>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
  </StrictMode>,

  // MyApp() works if we remove strict mode cause ultimately this is js
)


//bundles are for behind the scene handling
// everything is parsed to convert it into tree


// Virtual Dom  React creates it's own virtual dom seprately
//  Rendring < App /> using jsx 
// jsx let's you use html inside js letting you create and call your custom tags
// what is app app is a function containing/ returning html elements which was exported and imported
// vite doesn't have any react scripts because it uses jsx
// you can remove or leave strict mode it makes it much more restricted or free
//  be sure to make the extension .jsx if using vite
// and make it uppercase ( best practices) if using in vite
// you can name freeely in simmple react npx create react  but is more strict in vite or any other
// jsx elements must be wrapped in one single parent element
// bcoz you can only return one element
// created fragment for reducing redundancy
// capitalization of function is a must in every so making good
// practices just name the file and function in capitalization to reduce any error that may occur

