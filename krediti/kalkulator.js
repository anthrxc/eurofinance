function izracunajKredit() {
    const kamatnaStopa = parseFloat(document.getElementById('vrsta-kredita').value);
    const iznos = parseFloat(document.getElementById('iznos').value);
    const godine = parseInt(document.getElementById('godine').value);
    const netocanUnos = document.getElementById('netocan-unos');
    const rezultati = document.getElementById('rezultati');

    if (isNaN(kamatnaStopa) || isNaN(iznos) || isNaN(godine) || iznos <= 0 || godine <= 0) {
        rezultati.style.display = "none";
        netocanUnos.style.display = "block";
    } else {
        rezultati.style.display = "block";
        netocanUnos.style.display = "none";

        const mjesecnaRata = kamatnaStopa / 100 / 12;
        const brojOtplata = godine * 12;
        const mjesecnaOtplata = (iznos * mjesecnaRata) / (1 - Math.pow((1 + mjesecnaRata), -brojOtplata));
        const ukupnaOtplata = mjesecnaOtplata * brojOtplata;
        const ukupnoKamata = ukupnaOtplata - iznos;

        document.getElementById('mjesecna-rata').innerText = mjesecnaOtplata.toFixed(1).toLocaleString('hr-HR');
        document.getElementById('ukupno-placeno').innerText = ukupnaOtplata.toFixed(1).toLocaleString('hr-HR');
        document.getElementById('ukupno-kamata').innerText = ukupnoKamata.toFixed(1).toLocaleString('hr-HR');
    }
}
