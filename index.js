

let students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree:'Arts',
      email: 'charlie@example.com'
    }
  ]; 


  function populateTable() {
    const tableBody = document.querySelector('.tbody')

    tableBody.innerHTML="";

    students.forEach(item=>{
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent=item.ID;

        const nameCell = document.createAttribute("td");
        nameCell.textContent=item.name
        
        const emailCell = document.createAttribute("td");
        emailCell.textContent =item.email
        
        
        const gpaCell = document.createAttribute("td");
        gpaCell.textContent=item.gpa

        const ageCell = document.createAttribute("td");
        ageCell.textContent=age.email
        
        const degreeCell = document.createAttribute("td");
        degreeCell.textContent=degree.email

        row.appendChild(idCell)
        row.appendChild(nameCell)
        row.appendChild(emailCell)
        row.appendChild(gpaCell)
        row.appendChild(ageCell)
        row.appendChild(degreeCell)

        tableBody.appendChild(row)
    })
  }

  window.onload = populateTable;






//   // Function to add data to the table

//   function addDataToTable(data) {
//     const tableBody = document.querySelector('#table')

//     data.forEach(item => {
//       const row = tableBody.insertRow();
//       const nameCell = row.insertCell(0);
//       const emailCell = row.insertCell();
//       const gpaCell = row.insertCell(2);
//       const ageCell = row.insertCell(3);
//       const degreeCell = row.insertCell(4);

//       nameCell.textContent = item.name;
//       emailCell.textContent = item.email;
//       gpaCell.textContent = item.gpa;
//       ageCell.textContent = item.age;
//       degreeCell.textContent = item.degree;
//     });
//   }

//   // Event listener for the form submission
//   const form = document.querySelector("#myForm");
//   form.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission

//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const gpa = document.querySelector("#gpa").value;
//     const age = document.querySelector("#age").value;
//     const degree = document.querySelector("#degree").value;

    

//       const newData = [{ name, email, gpa, age, degree }];
//       addDataToTable(newData);

//       // Clear form fields
//       name.value = "";
//       email.value = "";
//       gpa.value = "";
//       age.value = "";
//       drgree.value = "";
    
//   });

