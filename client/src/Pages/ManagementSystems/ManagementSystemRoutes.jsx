// For gym management system
import GymDashboard from './GymManagement/GymDashboard'
import GymAddStudent from './GymManagement/GymAddStudent'
import Add from './GymManagement/SubPages/Add'
import ViewStudent from './GymManagement/GymViewStudent'


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
                    <Route path='add' element={<Add />} />
                    {/* <Route path='update/:studentId' element={<Update/>} /> */}
                    <Route path='view-students' element={<ViewStudent />} />
                    {/* <Route path='attendance' element={<Attendance />} />
                    <Route path='fee-collected' element={<FeeCollected />} />
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