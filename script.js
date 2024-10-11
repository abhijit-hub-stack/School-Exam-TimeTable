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
    const Class=document.getElementById("Class").value;

    if (!schoolName || !testName || !Class || entries.length === 0) {
        alert("Please enter school name, test name, Class , and at least one entry.");
        return;
    }

    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
        <head>
            <title>${schoolName} - ${testName} - ${Class} </title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 150;}
                table { width: 90%; border-collapse: collapse; margin-top: 20px; margin-left:75px; margin-right:35px;}
                th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
                th { background-color: #f2f2f2; }
                h1, h2 { margin: 0; }
                h1 { margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <h1>${schoolName}</h1>
            <h2>${testName} </h2>
            <br>
             <h2>Class :- ${Class} </h2>
            <br>
            <h1>Timetable</h1>
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
