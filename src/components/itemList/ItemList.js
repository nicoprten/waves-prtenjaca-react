import Item from '../item/Item.js'
function ItemList(){
    let productos = [
        {
            id: 1,
            nombre: 'Remera Enlighted',
            precio: 2400,
            srcimg: '//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/remera_fallbody11-8045da76c1026d10ff16308897720520-1024-1024.png',
            desc: 'Remera muy fachera limitada.'
        }, 
        {
            id: 2,
            nombre: 'Pantalon',
            precio: 1300,
            srcimg: '//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/pantalon_ai_bordado111-840ae6036c78d37aa716263754206574-1024-1024.png',
            desc: 'Muy comodos para salir a correr.'
        }, 
        {
            id: 3,
            nombre: 'Gorro de lana RipCurl',
            precio: 900,
            srcimg: '//d3ugyf2ht6aenh.cloudfront.net/stores/121/284/products/beanie-logo21-2a1cf6b7a8e808eb9416276009088444-1024-1024.png',
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
                            <>
                                <Item 
                                key={producto.id}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                srcimg={producto.srcimg}
                                desc={producto.desc}
                                />
                            </>
                        )
                    })}
            </div>
        </>
    );
}
export default ItemList;