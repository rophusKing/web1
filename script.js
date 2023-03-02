const form = document.getElementById('contact-form');
const projectNameInput = document.getElementById('project-name');
const projectDateInput = document.getElementById('project-date');
const projectDurationInput = document.getElementById('project-duration');
const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirm-email');
const contactMethodInput = document.getElementById('contact-method');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const projectName = projectNameInput.value;
    const projectDate = new Date(projectDateInput.value);
    const projectDuration = projectDurationInput.value;
    const email = emailInput.value;
    const confirmEmail = confirmEmailInput.value;
    const contactMethod = contactMethodInput.value;

    // Check that the proposed start date is at least 1 day in the future
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds
    const minimumStartDate = new Date(today.getTime() + oneDay);
    if (projectDate.getTime() < minimumStartDate.getTime()) {
        alert('Please choose a project start date that is at least 1 day in the future.');
        return;
    }

    // Check that the user's email matches the confirmation email
    if (email !== confirmEmail) {
        alert('Please make sure your email addresses match.');
        return;
    }

    // Send the form data to the server
    const formData = {
        projectName,
        projectDate,
        projectDuration,
        email,
        contactMethod,
    };

    console.log(formData); // for testing purposes only

    // Display a popup which summarizes the form data after submission
    const popupMessage = `Thank you for your proposal! We will review your project and get back to you as soon as possible.

  Project Name: ${projectName}
  Project Date: ${projectDate}
  Project Duration: ${projectDuration}
  Email: ${email}
  Preferred Contact Method: ${contactMethod}`;
    alert(popupMessage);

    // Clear the form inputs
    form.reset();
});