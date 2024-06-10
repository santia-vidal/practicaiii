const dolarapi = 'https://dolarapi.com/v1/dolares';
i = 0;
fetch(dolarapi)
  .then(response => {

    if (!response.ok) {
      throw new Error('La API no se pudo cargar');
    }
    return response.json();
  })
  .then(data => {
    data.forEach((dolar,index) => {
        const indexx = index + 1;
        
      console.log(`
        ${indexx} - Dólar ${dolar.nombre} - Compra: $${dolar.compra} - Venta: $${dolar.venta}
      `);
    });
  })
  




