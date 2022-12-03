const table = document.querySelector('table');
let count = 0;
for (let r = 1; r <= 10; r++) {
    const row = document.createElement('tr');
    row.classList.add('table__inner');
    for (let num = 1; num <= 10; num++) {
        const cell = document.createElement('td');
        cell.classList.add('table__inner');
        row.append(cell);
        count += 1;
        cell.innerText = count;
        cell.style.background += 1;
    }
    table.append(row);
}
