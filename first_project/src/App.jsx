import React from 'react'

const App = () => {
      const username = "Bhaskar Gupta"

  return (
    <div>
      <h1>NavBar</h1>
      {/* < NavBar /> */}

      <h1>Heder</h1>
      {/* < Header /> */}

      <h1>Hero</h1>
      {/* < HeroContent /> */}

      <h1>Cards</h1>
      {/* < Cards /> */}

      <h1>Footer</h1>
      {/* < Footer /> */}


      {/* How to inject variables in jsx */}
      {/* using {} */}
      <h3> My Name is {username}</h3>


      {/* the App is structure something like this. */}
    
    </div>
  )
}

export default App


// we need to enable javascript to run this application telling people
// to enable js in their browser
//  