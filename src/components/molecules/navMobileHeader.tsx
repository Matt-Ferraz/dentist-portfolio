import { FaBars } from 'react-icons/fa'
import BigLink from '../atoms/bigLink'

export default function NavmobileHeader(props: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <BigLink label="Dra. Hyara Ferraz" href="/sobre-mim"/>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:bg-default-bg duration-500 hover:text-main-golden p-2 rounded-md text-xl"
            onClick={props.toggleNav}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  )
}