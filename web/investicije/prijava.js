document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');
    const consultationForm = document.getElementById('consultation-form');
    const submissionStatus = document.getElementById('submission-status');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    consultationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (name && email && phone) {
            submissionStatus.textContent = "Vaša prijava za konzultacije je uspješno podnesena!";
            submissionStatus.style.color = "green";
        } else {
            submissionStatus.textContent = "Molimo ispunite sva polja.";
            submissionStatus.style.color = "red";
        }
    });
});
