document.addEventListener('DOMContentLoaded', function () {
    const prijavaZaKonzultacije = document.getElementById('konzultacije-prijava');
    const statusPrijavnice = document.getElementById('status-prijavnice');

    prijavaZaKonzultacije.addEventListener('submit', function (event) {
        event.preventDefault();

        const ime = document.getElementById('ime').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefon = document.getElementById('telefon').value.trim();

        if (ime && email && telefon) {
            statusPrijavnice.textContent = "Vaša prijava za konzultacije je uspješno podnesena!";
            statusPrijavnice.style.color = "green";
        } else {
            statusPrijavnice.textContent = "Molimo ispunite sva polja.";
            statusPrijavnice.style.color = "red";
        }
    });
});
