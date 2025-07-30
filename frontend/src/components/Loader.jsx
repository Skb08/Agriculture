import React from 'react'

const Loader = () => {
  return (
     <div className="fixed inset-0 flex items-center justify-center bg-[#f6fff0] z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-green-800 text-xl font-semibold">Loading Agriculture Universe...</p>
      </div>
    </div>
  )
}

export default Loader
