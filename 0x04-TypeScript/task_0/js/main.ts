interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age:22,
    location: 'New York'
};
const student2: Student = {
    firstName: 'Jane',
    lastName:'Smith',
    age: 54,
    location: 'Los Angeles'
};

const studentList: Student[] = [student1, student2]


document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    const header1 = document.createElement('th');
    const header2 = document.createElement('th');

    header1.textContent = 'First Name';
    header2.textContent = 'Location';

    tableHeader.appendChild(header1);
    tableHeader.appendChild(header2);
    table.appendChild(tableHeader);

    studentList.forEach((student) => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    document.body.appendChild(table);
});