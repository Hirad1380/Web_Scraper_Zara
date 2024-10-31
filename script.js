window.onload = () => {
    var reader = new FileReader(),
        x = document.getElementById("field"),
        file = document.getElementById("file"),
        table = document.getElementById("table"),
        cont_table = document.getElementById("cont_tbl"),
        main = document.getElementById("main"),
        searchInput = document.getElementById("search-input");
    let rows;

    file.onchange = () => {
        reader.readAsText(file.files[0]);
        x.style.display = "none";
        main.style.display = "block";
        cont_table.style.display = "block";
    };

    reader.onloadend = () => {
        let csv = reader.result;
        table.innerHTML = ""; // Clear previous table content

        // Parse CSV into an array of arrays
        rows = csv.trim().split('\n').map(row => row.split(','));

        // Generate HTML table
        let html = '<table><thead><tr>';
        rows[0].forEach(header => {
            html += `<th>${header}</th>`;
        });
        html += '</tr></thead><tbody>';
        rows.slice(1).forEach(row => {
            html += '<tr>';
            row.forEach(cell => {
                html += `<td>${cell}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table>';

        // Display the HTML table
        table.innerHTML = html;
    };

    function searchCSV(query) {
        let results = [];
        if (rows) {
            rows.forEach((row, index) => {
                row.forEach(col => {
                    let value = col.trim(); // Remove extra spaces
                    if (value.toLowerCase().includes(query.toLowerCase())) {
                        results.push(index);
                    }
                });
            });
        }
        return results;
    }

    function displayResults(results) {
        table.querySelectorAll('tr').forEach((row, index) => {
            if (results.includes(index)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        const results = searchCSV(query);
        displayResults(results);

        // Highlight search results
        const filter = searchInput.value.toUpperCase();
        const cells = document.querySelectorAll("#table td");

        if (filter === "") {
            cells.forEach(cell => {
                cell.innerHTML = cell.textContent;
            });
            return;
        }
        cells.forEach(cell => {
            let textValue = cell.textContent;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                textValue = textValue.replace(
                    new RegExp(filter, "gi"),
                    `<span class="highlight">$&</span>`
                );
                cell.innerHTML = textValue;
            } else {
                cell.innerHTML = textValue;
            }
        });
    });
};