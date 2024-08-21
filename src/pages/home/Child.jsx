import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div>
        <h2 className='text-center text-4xl font-bold py-5'>Child</h2>
        <GrandChild/>
    </div>
  )
}

export default Child