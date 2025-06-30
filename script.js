async function fetchVacancies() {
    try {
        // const response = await fetch('https://api.hh.ru/vacancies?employer_id=4893760');
        const data = await response.json();
        const vacanciesContainer = document.getElementById('vacancies');
        vacanciesContainer.innerHTML = '';

        if (data.items.length === 0) {
            // если вакансий нет
            const noVacancies = document.createElement('p');
            noVacancies.textContent = 'На данный момент нет открытых вакансий. Попробуйте позже!';
            noVacancies.style.textAlign = 'center';
            noVacancies.style.fontSize = '18px';
            noVacancies.style.color = '#777';
            vacanciesContainer.appendChild(noVacancies);
            return;
        }

        // если есть вакансии
        data.items.forEach(vacancy => {
            const vacancyElement = document.createElement('a');
            vacancyElement.className = 'vacancy__link';
            vacancyElement.href = vacancy.alternate_url;
            vacancyElement.target = '_blank';
            vacancyElement.innerHTML = `
                <h2>${vacancy.name}</h2>
                <p>Подробнее</p>
            `;
            vacanciesContainer.appendChild(vacancyElement);
        });

    } catch (error) {
        console.error('Ошибка при загрузке вакансий:', error);
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Произошла ошибка при загрузке вакансий. Пожалуйста, попробуйте позже.';
        errorMsg.style.textAlign = 'center';
        errorMsg.style.color = 'red';
        document.getElementById('vacancies').appendChild(errorMsg);
    }
}
fetchVacancies();

{/* <p><strong>Компания:</strong> ${vacancy.employer.name}</p>   */}

function toggleMenu() {
    console.log('clicked'); // проверка
    document.querySelector('.nav__list').classList.toggle('open');
}