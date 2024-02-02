import React from 'react'
import Card from './Card'

const CardContainer = ({projects}: any) => {
  return (
    <div className='flex flex-wrap items-center justify-center py-10 gap-4'>
        {
            projects.map((item: any) => (
                <Card key={item.slug} item={item} />
            ))
        }
    </div>
  )
}

export default CardContainer