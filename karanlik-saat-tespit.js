// leventemre.com - github.com/v4r1able

const karanliksaatler = ["20", "21", "22", "23", "00", "01", "02", "03", "04", "05"];
const tarih = new Date();

karanliksaatler.forEach(function(saat) {
    if(saat==tarih.getHours()) {
        // hava karanlık ise yapılacak işlemi giriniz. örn: dark tema geçiş işlemi

        // örnek
        document.body.className = "karanlik";

        return;
    }
})
