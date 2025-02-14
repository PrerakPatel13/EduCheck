import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ClassroomForm from './pages/teacher/createClass'
import StudentsWork from './pages/teacher/studentsWork'
import CreateTest from './pages/teacher/createTest'
import CreateQuest from './pages/teacher/createQuest'
import ViewTest from './pages/teacher/viewTest'
import JoinClass from './pages/student/joinClass'
import Dashboard from './pages/classroom/Dashboard'
import Class from './pages/classroom/Class'
import Profile from './pages/classroom/Profile'
import Password from './pages/classroom/Password'
import People from './pages/classroom/People'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create_class' element={<ClassroomForm />} />
        <Route path='/students_work' element={<StudentsWork />} />
        <Route path='/create_qn/:id' element={<CreateQuest />} />
        <Route path='/create_test/:id' element={<CreateTest />} />
        <Route path='/view_test/:id' element={<ViewTest />} />
        <Route path='/join_class' element={<JoinClass />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/view_class/:id' element={<Class />} />
        <Route path='/password' element={<Password />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/people/:id' element={<People />} />
      </Routes>
    </BrowserRouter>
  )
}
