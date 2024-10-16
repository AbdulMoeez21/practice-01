import React from 'react'

const Card = ({username,desc,btntext="Visit me"}) => {
  return (
    <>
        <div className="relative h-[400px] w-[330px] rounded-md mt-4">
  <img 
    src="https://images.pexels.com/photos/1416900/pexels-photo-1416900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    alt="AirMax Pro" width="382" height="512"
    className="z-0 h-full rounded-md object-cover" 
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 mr-4 text-sm text-gray-300">
      {desc}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
     {btntext} →
    </button>
  </div>
</div>

    </>
  )
}

export default Card