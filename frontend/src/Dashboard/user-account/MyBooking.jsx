import useFetchData from "../../Hooks/useFetchData"
import { BASE_URL } from "../../config"
import DoctorCard from "../../components/Doctors/DoctorCard"
import Loading from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"

const MyBooking=()=> {

    const {data:appointment} =useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
      MyBooking
    </div>
  )
}

export default MyBooking
