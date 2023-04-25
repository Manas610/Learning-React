import React, { useEffect } from 'react'
import axios from 'axios'
import { server } from '.'

const Exchanges = () => {
  useEffect(() => {
    const fetchExchanges = async () => {
        const { data } = await axios.get(`${server}/exchanges`)
        console.log(data)
    }
    fetchExchanges()
    
  }, [])
  
  
    return (
    <div>
      Exchanges
    </div>
  )
}

export default Exchanges
