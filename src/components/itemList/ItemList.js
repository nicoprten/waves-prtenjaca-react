import Item from '../item/Item.js';
function ItemList(){
    let productos = [
        {
            id: 1,
            nombre: 'Remera Enlighted',
            precio: 2400,
            desc: 'Remera muy fachera limitada.'
        }, 
        {
            id: 2,
            nombre: 'Pantalon Adidas',
            precio: 1300,
            desc: 'Muy comodos para salir a correr.'
        }, 
        {
            id: 3,
            nombre: 'Gorro de lana RipCurl',
            precio: 900,
            desc: 'Preparate para el frio con el mejor gorro.'
        }
    ];
    // console.log(productos)
    return(
        <>
            <h2>Lista de productos</h2>
            <div className='listado'>
                {productos?.map((producto) => {
                        return(
                            <Item 
                            key={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            desc={producto.desc}
                            />
                        )
                    })}
            </div>
        </>
    );
}
export default ItemList;