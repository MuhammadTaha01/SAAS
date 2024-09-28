// For gym management system
import GymDashboard from './GymManagement/GymDashboard'
import GymAddStudent from './GymManagement/GymAddStudent'
import AddStudent from './GymManagement/SubPages/AddStudent'
import ViewStudent from './GymManagement/GymViewStudent'
// import AddAttendance from './GymManagement/GymAddAttendance'
// import ViewAttendance from './GymManagement/GymViewAttendance'
import GymFeeStatus from './GymManagement/GymFeeStatus'
import UpdateStudent from './GymManagement/SubPages/UpdateStudent'


// For academy management system
import AcademyDashboard from './AcademyManagement/AcademyDashboard'

import { Routes, Route, useParams } from 'react-router-dom';

const ManagementSystemRoutes = () => {
    const { system } = useParams();
    return(
        <Routes>
            {system === 'gym' && (
                <>
                    <Route path='dashboard' element={<GymDashboard/>} />
                    <Route path='add-students' element={<GymAddStudent />} />
                    <Route path='add' element={<AddStudent />} />
                    <Route path='update/:id' element={<UpdateStudent/>} />
                    <Route path='view-students' element={<ViewStudent />} />
                    {/* <Route path='add-attendance' element={<AddAttendance />} />
                    <Route path='view-attendance' element={<ViewAttendance />} /> */}
                    <Route path='fee-status' element={<GymFeeStatus />} />
                    {/* <Route path='fee-collected' element={<FeeCollected />} />
                    <Route path='helpcenter' element={<Help />} /> */}
                </>
            )}
            {system === 'academy' && (
                <>
                    <Route path='dashboard' element={<AcademyDashboard />} />
                    {/* <Route path='add-students' element={<AcademyAddStudent />} />
                    <Route path='view-students' element={<AcademyViewStudent />} />
                    <Route path='announcements' element={<AcademyAnnouncements />} />
                    <Route path='events' element={<AcademyEvents />} />
                    <Route path='analytics' element={<AcademyAnalytics />} />
                    <Route path='helpcenter' element={<AcademyHelpCenter />} />
                    <Route path='settings' element={<AcademySettings />} /> */}
                </>
            )}
        </Routes>
    );
}

export default ManagementSystemRoutes;