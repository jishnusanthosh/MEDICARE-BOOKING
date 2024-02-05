import { BiMenu } from 'react-icons/bi'

const Tabs = ({ tab, setTab }) => {
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          className={`${
            tab === 'overview'
              ? 'bg-indigo-100 text-primaryColor'
              : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          className={`${
            tab === 'Appointments'
              ? 'bg-indigo-100 text-primaryColor'
              : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          className={`${
            tab === 'Settings'
              ? 'bg-indigo-100 text-primaryColor'
              : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Settings
        </button>
        <button
          className={`${
            tab === 'settings'
              ? 'bg-indigo-100 text-primaryColor'
              : 'bg-transparent text-headingColor'
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
      </div>
    </div>
  )
}

export default Tabs;
