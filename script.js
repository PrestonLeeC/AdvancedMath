function generateTable() {
    const min = -1000.00;
    const max = 1000.00;
    var numbers = [];

    for (let i = 1; i <= 5; i++) {
        var cell = document.getElementById(`random-cell${i}`);
        const rand = (Math.random() * (max - min) + min).toFixed(2);
        cell.textContent = rand
        numbers.push(rand)
        
        cell = document.getElementById(`round-cell${i}`);
        cell.textContent = Math.round(rand);
        
        cell = document.getElementById(`abs-cell${i}`);
        cell.textContent = Math.abs(rand);
        
        cell = document.getElementById(`floor-cell${i}`);
        cell.textContent = Math.floor(rand);
        
        cell = document.getElementById(`ceil-cell${i}`);
        cell.textContent = Math.ceil(rand);
        
        cell = document.getElementById(`pow-cell${i}`);
        cell.textContent = Math.pow(rand, 2).toFixed(2);
        
        cell = document.getElementById(`sqrt-cell${i}`);
        cell.textContent = Math.sqrt(rand).toFixed(2);
    }

    document.getElementById('min-cell').textContent = Math.min(...numbers);
    document.getElementById('max-cell').textContent = Math.max(...numbers);
}

generateTable()