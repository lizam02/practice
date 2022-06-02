function guess() {
    var guessNumber = 5
    var ourNumber = prompt("Введите число");

    if (ourNumber > guessNumber) {
        alert("Число должно быть меньше");
        return guess();
    } else if (ourNumber == guessNumber) {
        return alert("Вы угадали!");
    } else {
        alert("Число должно быть больше");
        return guess();
    }
}

//function reminder () {
    alert("Ты здесь слишком долго!");
    //window.close();


//setTimeout(reminder, 3000);

function valideForm() {
    alert("Проверка формы");
    var name = document.getElementById("name").value;
    console.log(name);
}
document.querySelector(".button").addEventListener("click", valideForm);