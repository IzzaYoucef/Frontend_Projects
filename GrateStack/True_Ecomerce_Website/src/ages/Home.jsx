import React from 'react'
import Main from '../components/Main/Main'
import Usage from '../components/Usage/Usage'
import Content from '../components/Usage/Content/Content'
import Offre from '../components/Offre/Offre'
import Collection from '../components/Collection/Collection'
const Home = () => {
  return (
      <div>
        <Main />
        <Usage title={"POPULAR IN WOMAN"} />
        <Content />
        <Offre />
        <Usage title={"NEW COLLECTIONS"} />
        <Collection />
    </div>
  )
}

export default Home