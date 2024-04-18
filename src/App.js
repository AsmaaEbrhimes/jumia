
import Signup from "./components/SignUp/Signup"
import Sigin from "./components/Signin/sign"
import Dashbord from "./components/Dashboard/Dashbord"
import Content from "./components/contentent/Content"
import { Routes, Route } from 'react-router-dom';
import Products from "./components/products/Products"
import Header from "./components/header/header"
import Details from "./components/detalisProduct/Details"
import Shopping from "./components/Shopphing/Shopping"
import CreatProduct from "./components/creat/Creat"
import UpdataPopup from "./components/updates/update"
import Example from "./components/char/Char"
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const changeAr = () => {
    i18n.changeLanguage('ar')
    localStorage.setItem('language', 'ar');
  }
  const changeEn = () => {
    i18n.changeLanguage('en')
    localStorage.setItem('language', 'en');
  }

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Signup />
        </>
      }
      />
      <Route path="/content" element={
        <>
          <Header changeAr={changeAr} changeEn={changeEn} />
          <Content />
          <Products />
        </>
      }
      />
      <Route path="/Details/:_id" element={
        <>
          <Header changeAr={changeAr} changeEn={changeEn} />
          <Details />
        </>
      }
      />
      <Route path="/login" element={<Sigin />} />

   
        <Route path="/Dashbord" element={<Dashbord/>} />
   

      <Route path="/shopping" element={
        <>
          <Header changeAr={changeAr} changeEn={changeEn} />
          <Shopping />
        </>
      }
      />
      <Route path="/Example" element={<Example />} />

      <Route path="/creat" element={<CreatProduct />} />
      <Route path="/updata" element={<UpdataPopup />} />

     
    </Routes>
  )
}


export default App;



