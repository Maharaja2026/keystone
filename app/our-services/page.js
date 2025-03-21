import React from 'react'
import ServiceLanding from '../components/services/serviceLanding'
import OurServices from '../components/services/ourServices'
import ServiceProcess from '../components/services/serviceProcess'
import ServiceStats from '../components/services/serviceStats'

const page = () => {
  return (
    <div>
      <ServiceLanding/>  
      <OurServices/>
      <ServiceProcess/>
      <ServiceStats/>
    </div>
  )
}

export default page