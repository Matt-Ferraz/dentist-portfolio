import BigLink from '../atoms/bigLink'
import OptionsSectionNavBar from '../molecules/optionsSection'

export default function NavDesktopHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <BigLink label="Dra. Hyara Ferraz" href="/sobre-mim"/>
        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            <OptionsSectionNavBar/>
          </div>
        </div>
      </div>
    </div>
  )
}