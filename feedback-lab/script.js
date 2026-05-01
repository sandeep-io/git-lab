function submitForm(event) {
  event.preventDefault(); // stop page reload

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let job = document.getElementById("job").value;
  let feedback = document.getElementById("feedback").value;

  let output = `
    Name: ${name} <br>
    Age: ${age} <br>
    Email: ${email} <br>
    Job: ${job} <br>
    Feedback: ${feedback}
  `;

  document.getElementById("result").innerHTML = output;
}