// Contacto.tsx
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import styles from './contact.module.css';

export default function Contacto() {
    return (
        <>
            <Navbar />
            <Header title="Contacto" image="viggie.jpg"/>
            <section className={styles.contact}>
                <div className={styles.contact__container}>
                    <p className={styles.contact__description}>¡Estamos aquí para ayudarte! Si tienes alguna pregunta o comentario, contáctanos.</p>
                    <div className={styles.locations}>
                        <div className={styles.location}>
                            <h2 className={styles.location__title}>Sede Principal</h2>
                            <p>Dirección: Calle Principal, Número 123</p>
                            <p>Teléfono: <span className={styles.contact__info}>123-456-7890</span></p>
                            <p>Correo: <span className={styles.contact__info}>info@hamburguesas.com</span></p>
                        </div>
                        <div className={styles.location}>
                            <h2 className={styles.location__title}>Sede Secundaria</h2>
                            <p>Dirección: Avenida Secundaria, Número 456</p>
                            <p>Teléfono: <span className={styles.contact__info}>789-012-3456</span></p>
                            <p>Correo: <span className={styles.contact__info}>info@hamburguesas.com</span></p>
                        </div>
                        <div className={styles.location}>
                            <h2 className={styles.location__title}>Sede Secundaria</h2>
                            <p>Dirección: Avenida Secundaria, Número 456</p>
                            <p>Teléfono: <span className={styles.contact__info}>789-012-3456</span></p>
                            <p>Correo: <span className={styles.contact__info}>info@hamburguesas.com</span></p>
                        </div>
                        <div className={styles.location}>
                            <h2 className={styles.location__title}>Sede Secundaria</h2>
                            <p>Dirección: Avenida Secundaria, Número 456</p>
                            <p>Teléfono: <span className={styles.contact__info}>789-012-3456</span></p>
                            <p>Correo: <span className={styles.contact__info}>info@hamburguesas.com</span></p>
                        </div>
                        <div className={styles.location}>
                            <h2 className={styles.location__title}>Sede Secundaria</h2>
                            <p>Dirección: Avenida Secundaria, Número 456</p>
                            <p>Teléfono: <span className={styles.contact__info}>789-012-3456</span></p>
                            <p>Correo: <span className={styles.contact__info}>info@hamburguesas.com</span></p>
                        </div>
                        {/* Agrega más sedes si es necesario */}
                    </div>
                </div>
            </section>
        </>
    );
}
