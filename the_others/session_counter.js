// Функция для увеличения счетчика посещений
function incrementCounter() {
    // Получаем текущее значение счетчика из кэша браузера
    var counter = parseInt(localStorage.getItem('pageVisitCounter')) || 0;
    counter++;
    // Сохраняем обновленное значение счетчика в кэше браузера
    localStorage.setItem('pageVisitCounter', counter);
    // Обновляем отображение счетчика на странице
    document.getElementById('counter').innerText = counter;
}
// Функция для сброса счетчика посещений
function resetCounter() {
    // Сбрасываем значение счетчика в кэше браузера
    localStorage.removeItem('pageVisitCounter');
    // Обновляем отображение счетчика на странице (устанавливаем значение в 0)
    document.getElementById('counter').innerText = '0';
}
// При загрузке страницы вызываем функцию увеличения счетчика
window.onload = function() {
    incrementCounter();
};