const chart = document.querySelector('#chart').getContext('2d');

//Create a new chart instance

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Nov', 'Dez'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88000, 26000, 46000, 32968, 5600, 300, 18656, 24832, 36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

//Show or hide sidebar

const menuBtn = document.querySelector('#menu-btn'),
closeBtn = document.querySelector('#close-btn'),
sideBar = document.querySelector('aside');


function showOrHideSideBar() {
    menuBtn.addEventListener('click', () =>{
        sideBar.style.display = 'block';
    })

    closeBtn.addEventListener('click', () =>{
        sideBar.style.display = 'none';
    })
}

showOrHideSideBar();



//Mudar o tema

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');


})