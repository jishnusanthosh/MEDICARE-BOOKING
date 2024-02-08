import React from 'react'

const Appointments = ({ appointments }) => {
  return (
    <table className="w-full text-left text-sm text-grey-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Payment
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Book on
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments?.map(item=><tr key={item._id}>
            <th scope='row'className='flex item-center px-6 py-4 text-gray-900 whitespace-nowrap' >
                <img src={item.user.photo} className='w-10 h-10 rounded-full' alt="" />
                <div className='pl-3'>
                    <div className='text-base font-semibold'>{item.user.name}</div>
                    <div className='text-normal text-gray-500'>{item.user.email}</div>
                </div>
            </th>
            </tr>)}
      </tbody>
    </table>
  )
}

export default Appointments
