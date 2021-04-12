const randomDog = 'https://dog.ceo/api/breeds/image/random/3';
const main = document.querySelector('.selector');
const button = document.querySelector('.getDogs');
const loading = document.querySelector('.loading');
const status = document.querySelector('.status');
const statusMain = document.querySelector('.statusMain');
const deleteButton = document.querySelector('.deleteButton');

loading.style.display = 'none';
statusMain.style.display = 'none';

async function getRandomDog() {
    loading.style.display = '';
    statusMain.style.display = 'none';
    const dog = await fetch(randomDog);
    const data = await dog.json();
    main.innerHTML = '';
    data.message.forEach(dogsimage => {
  
        loading.style.display = '';
        statusMain.style.display = 'none';
        main.innerHTML +=`
        <div class="column">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img src="${dogsimage}" alt="Dog Image">
                    </figure>
                </div>
            </div>
        </div>`      
    });
    statusMain.style.display = '';
    status.innerHTML = data.status;
    loading.style.display = 'none';   
}

deleteButton.addEventListener('click', () => {
    statusMain.style.display = 'none';
});
button.addEventListener('click', getRandomDog);
