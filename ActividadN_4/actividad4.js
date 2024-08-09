document.addEventListener('DOMContentLoaded', function() {
    const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const LLlenar_info = document.getElementById('Tabla_elementos');

            const Mostrardiez = data.slice(0, 10);
            Mostrardiez.forEach(crypto => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td><img src="${crypto.image}" alt="${crypto.name}" width="32" height="32"></td>
                    <td>${crypto.name}</td>
                    <td>${crypto.symbol}</td>
                    <td>${crypto.current_price}</td>
                    <td>${crypto.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>${crypto.total_volume}</td>
                `;
                
                LLlenar_info.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching the data:', error));
});
