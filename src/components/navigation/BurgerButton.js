import PropTypes from 'prop-types'

const BurgerButton = ({ isActive, toggle }) => {
  return (
    <button className="group flex flex-col rounded justify-center items-center text-white md:hidden" onClick = {toggle} >
    <div
      className={`h-[3px] w-[25px] my-0.5 rounded-full bg-white transition ease transform duration-300 ${isActive ? 'rotate-45 translate-y-[6px] opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
    />
    <div
      className={`h-[3px] w-[25px] my-0.5 rounded-full bg-white transition ease transform duration-300 ${isActive ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`}
    />
    <div
      className={`h-[3px] w-[25px] my-0.5 rounded-full bg-white transition ease transform duration-300 ${isActive ? '-rotate-45 translate-y-[-8px] opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'}`}
    />
  </button>
  )
}

BurgerButton.propTypes = {
  isActive: PropTypes.bool,
  toggle: PropTypes.func,
}

export default BurgerButton