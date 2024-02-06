import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import MyBooking from './MyBooking'
import Profile from './Profile'
import useGetProfile from '../../Hooks/useFetchData'
import { BASE_URL } from '../../config'
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error'
import Tabs from '../doctor-account/Tabs'

function MyAccount() {
  const { dispatch } = useContext(AuthContext)
  const [tab, setTab] = useState('bookings')

  const { data: userData, loading, error } = useGetProfile(
    `${BASE_URL}/users/profile/me`,
  )
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {!error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-50px px-30px rounded-md">
              {/* Profile section */}
            </div>
            <div className="md:col-span-2 md:px-30px">
              <div>
                <Tabs tab={tab} setTab={setTab} handleLogout={handleLogout} />
              </div>
              {/* Conditional rendering of tab content */}
              {tab === 'bookings' && <MyBooking />}
              {tab === 'settings' && <Profile user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MyAccount;
