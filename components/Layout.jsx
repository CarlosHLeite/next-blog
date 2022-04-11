import style from '../styles/Layout.module.css';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
      <>
        <Navbar />
        <div className={style.container}>
            <main className={style.main}>
                {children}
            </main>
        </div>
      
      </>
    
  )
}

export default Layout