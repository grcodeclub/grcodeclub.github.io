    const rows = document.querySelectorAll(".mytable tr");
    
    rows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.backgroundColor = 'rgba(211, 211, 211, 0.211)'; 
        }
    });
