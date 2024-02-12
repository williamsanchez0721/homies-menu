import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Menu from "../components/menu/menu"
import Navbar from "../components/navbar/Navbar"

const Malteadas = () => {
    return(
        <>  
            <Navbar />
            {/* <Header title='Malteadas' image='postre.jpg'></Header> */}
            <Menu title='malteadas'></Menu>
            <Footer />
        </>
    )
}

export default Malteadas;