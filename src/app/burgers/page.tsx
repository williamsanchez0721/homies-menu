import Comidas from "../components/comidas/Comidas"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Menu from "../components/menu/menu"
import Navbar from "../components/navbar/Navbar"


const Burgers = () => {
    return(
        <>  
            <Navbar />
            <Menu title='burgers'></Menu>
            <Footer />
        </>
    )
}

export default Burgers;