import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
import classNames from 'classnames'

type SidebarButtonProps = {
  to: string
  title: string
  icon: JSX.Element
}

export default function SidebarButton({ to, title, icon }: SidebarButtonProps) {
  const location = useLocation()
  const isActive = location.pathname === to
  const btnClass = isActive ? '' : ''

  return (
    <Link to={to}>
      <div
        className={classNames(
          isActive ? 'bg-neutral-700 scale-[103%]' : '',
          'flex items-center p-3 rounded hover:bg-neutral-800',
          btnClass
        )}
      >
        <IconContext.Provider value={{ size: '30px' }}>
          {icon}
          <p className="text-xl px-4">{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}
