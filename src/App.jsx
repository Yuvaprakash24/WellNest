import { BrowserRouter, Routes, Route } from "react-router-dom"
import Check from "./components/Check"
import Footer from "./components/Footer"
import SignUp from "./components/SignUp"
import LogIn from "./components/Login"
import HomePage from "./components/HomePage"
import Assessment from "./components/Assessment"
import TherapiesAndGames from "./components/TherapiesAndGames"
import BlogCover from "./components/BlogCover"
import ResponsiveAppBar from "./components/ResponsiveAppbar"
import Doctors from "./components/Doctors"
import Medication from "./components/Medication"
import SelfAssessment from "./components/SelfAssessment"
import Therapy from "./components/core/Therapy"
import ScrollToTop from "./ScrollToTop"
import ConsultDoctor from "./components/core/ConsultDoctor"
import Contact from "./components/ContactUs"
import BlogPage from "./components/core/BlogPage"
import CreateBlogPage from "./components/core/CreateBlogPage"
import HowItWorks from "./components/HowItWorks"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Check />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/assessment' element={<><Assessment /><Footer/></>}/>
        <Route path='/therapies' element={<><TherapiesAndGames /><Footer/></>}/>
        <Route path='/blogs' element={<><BlogCover /><Footer/></>}/>
        <Route path='/doctors' element={<><Doctors /><Footer/></>}/>
        <Route path='/medication' element={<><Medication /><Footer/></>}/>
        <Route path='/self-assessment' element={<><SelfAssessment /><Footer/></>}/>
        <Route path="/games" element={<Therapy />} />
        <Route path="/consult-doctor" element={<ConsultDoctor />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/create-blogpage" element={<CreateBlogPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App