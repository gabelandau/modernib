import React from 'react'
import InfoBox from '../../components/InfoBox'
import './Home.scss'

function Home() {
  return (
    <div className="Home">
      <InfoBox
        title="What is ModernIB?"
        body={[
          'A modern imageboard software written in JavaScript/React. This software was written with an MIT license and you are free to use/modify it as you wish.',
          "Feel free to checkout the GitHub page if you're interested in the source code."
        ]}
      ></InfoBox>
    </div>
  )
}

export default Home
