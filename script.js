let entries = [];

function addTimetableEntry() {
    const day = document.getElementById("day").value;
    const date = document.getElementById("date").value;
    const subject = document.getElementById("subject").value;
    const syllabus = document.getElementById("syllabus").value;

    if (!day || !date || !subject || !syllabus) {
        alert("Please fill in all fields.");
        return;
    }

    const entry = { day, date, subject, syllabus };
    entries.push(entry);
    document.getElementById("entriesContainer").innerHTML += 
        `<div>${entries.length}. ${day}, ${date}, ${subject}, ${syllabus}</div>`;

    // Clear the input fields
    document.getElementById("day").value = '';
    document.getElementById("date").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("syllabus").value = '';
}

function generateTimetable() {
    const schoolName = document.getElementById("schoolName").value;
    const testName = document.getElementById("testName").value;

    if (!schoolName || !testName || entries.length === 0) {
        alert("Please enter school name, test name, and at least one entry.");
        return;
    }

    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
        <head>
            <title>${schoolName} - ${testName} Timetable</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
                th { background-color: #f2f2f2; }
                h1, h2 { margin: 0; }
                h1 { margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <h1>${schoolName}</h1>
            <h2>${testName} Timetable</h2>
            <table>
                <tr>
                    <th>Sr. No</th>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Syllabus</th>
                </tr>
                ${entries.map((entry, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${entry.day}</td>
                        <td>${entry.date}</td>
                        <td>${entry.subject}</td>
                        <td>${entry.syllabus}</td>
                    </tr>
                `).join('')}
            </table>
        </body>
        </html>
    `);
    newWindow.document.close();
}
