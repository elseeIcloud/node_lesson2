const http = require('http');
const fs = require('fs');
const axios = require('axios');

async function fetchDataAndSaveToFile() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments'); // Замените URL на нужный моковый API
        console.log(response);
        const data = JSON.stringify(response.data, null, 2);

        fs.writeFileSync('data.json', data);
        console.log('Данные успешно сохранены в файл data.json');
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

// Создаем HTTP-сервер и слушаем порт 3000
const server = http.createServer();

server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
    fetchDataAndSaveToFile();
});

