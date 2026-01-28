import React from 'react'

function Rating({ rating, reviews }) {
  return (
    <>
        <div className="flex items-center mt-1">
          <div className="relative inline-block leading-none">
            <div className="text-gray-300 text-xl">★★★★★</div>
            <div
              className="absolute top-0 left-0 overflow-hidden text-green-600 text-xl"
              style={{ width: `${(rating / 5) * 100}%` }}
            >
              ★★★★★
            </div>
          </div>
          <p className="text-[12px] ml-1">({reviews} Reviews)</p>
          </div>
    </>
  )
}

export default Rating
