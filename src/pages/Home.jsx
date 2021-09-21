

function Home(){

    return(
        <div className="data">
            <section className="data__instru">
                <h2 className="data__title">Verificar talles</h2>
                <img src="./img/medidas-icon.png" alt="icono verificar talle" className="data__img"/>
                <p className="data__p">Revisá la Tabla de Medidas para asegurarte que el talle que elijas sea el correcto.</p>
                <p className="data__p">Si tenés alguna duda comunicate por Whatsapp.</p>
            </section>
            <section className="data__instru">
                <h2 className="data__title">Medios de pago</h2>
                <img src="./img/pagos-icon.png" alt="icono medios de pago" className="data__img"/>
                <p className="data__p">Revisá que todos tus datos sean correctos antes de completar la compra.</p>
            </section>
            <section className="data__instru">
                <h2 className="data__title">Envíos</h2>
                <img src="./img/envios-icon.png" alt="icono envios" className="data__img"/>
                <p className="data__p">Revisá que todos tus datos sean correctos antes de completar la compra para poder enviar tu pedido.</p>
            </section>
            <section className="data__instru">
                <h2 className="data__title">Cambios y devoluciones</h2>
                <img src="./img/cambios-icon.png" alt="icono cambios y devoluciones" className="data__img"/>
                <p className="data__p">Tenés 10 días desde que recibís el pedido. El costo del envío corre por cuenta del cliente.</p>
                <p className="data__p">¡LOS PRODUCTOS DE SALE NO TIENEN CAMBIO NI DEVOLUCIÓN!</p>    
            </section>
        </div>
    )
}

export default Home;