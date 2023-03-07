import { FaArrowLeft } from 'react-icons/fa'
import Link  from 'next/link'

function InDevelopment() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-4xl font-bold text-gray-500">
      <div className="absolute top-4 left-4">
        <Link href='#' className="flex items-center space-x-2 cursor-pointer">
          <FaArrowLeft className="w-8 h-auto" />
          <p className="text-gray-550 font-bold">Return to home</p>
        </Link>
      </div>
      <span className="animate-pulse">In development...</span>
    </div>
  );
}

export default InDevelopment;
