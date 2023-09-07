import type { IServiceData } from '@content/Services'
import React from 'react'
import ServiceCard from './ServiceCard'

function ServiceCardContainer(props: { Services: IServiceData[] }) {
  return (
    props.Services.map((service) =>
      <div key={service.id} data-service_type={`${service.type}`} data-index={service.id} className="swiper-slide !flex !justify-center !items-center">
        <ServiceCard {...service} />
      </div>)
  )
}

export default ServiceCardContainer