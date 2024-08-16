const studentDetail = [
  {Name: "Karamveer Singh", Marks: "15%", Class: "12th", Address: "India"},
  {Name: "Rahul Sharma", Marks: "80%", Class: "11th", Address: "India"},
  {Name: "Priya Patel", Marks: "95%", Class: "10th", Address: "India"},
  {Name: "Amit Kumar", Marks: "70%", Class: "12th", Address: "India"},
  {Name: "Sneha Gupta", Marks: "88%", Class: "11th", Address: "India"},
  {Name: "Raj Malhotra", Marks: "75%", Class: "10th", Address: "India"},
  {Name: "Neha Singh", Marks: "92%", Class: "12th", Address: "India"},
  {Name: "Vikram Chauhan", Marks: "65%", Class: "11th", Address: "India"},
  {Name: "Anita Desai", Marks: "78%", Class: "10th", Address: "India"},
  {Name: "Sanjay Verma", Marks: "85%", Class: "12th", Address: "India"},
  {Name: "Jyoti", Marks: "90%", Class: "9th", Address: "India"},
  {Name: "Yakshita Yadav", Marks: "97%", Class: "12th", Address: "India"},
];

// Function to create a card for a student
function createStudentCard(student) {
  return `
      <div class="card-1">
          <h2>Student name: <b>${student.Name}</b></h2>
          <h2>Marks: <b>${student.Marks}</b></h2>
          <h2>Class: <b>${student.Class}</b></h2>
          <h2>Address: <b>${student.Address}</b></h2>
      </div>
  `;
}

// Function to render student cards
function renderStudentCards(studentsToRender) {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = studentsToRender.map(createStudentCard).join('');
}

// Initial render
renderStudentCards(studentDetail);

// Search functionality
const searchBox = document.getElementById('Input-text');
searchBox.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();
  const filteredStudents = studentDetail.filter(student =>
      student.Name.toLowerCase().includes(searchText)
  );
  renderStudentCards(filteredStudents);

  // Update search message
  const msgSearching = document.getElementById('msg-searching');
  if (searchText) {
      msgSearching.textContent = `Searching for: ${searchText}`;
  } else {
      msgSearching.textContent = '';
  }
});