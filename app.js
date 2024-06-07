// Menampilkan Daftar Acara Tv Dengan Axios

const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelectorAll('div').forEach((data)=> data.remove());
    const keyword = form.elements.query.value;
    const config = {
        params:{
            q:keyword},
    };

    const res = await axios.get('https://api.tvmaze.com/search/shows',config);
    console.log(res.data);
    getData(res.data);
    form.elements.query.value = '';

});

const getData = (shows) => {
    for (result of shows){
        if (result.show.image){

            let img = document.createElement('img');
            img.src = result.show.image.medium;

            let name = document.createElement('h2');
            name.textContent = result.show.name;

            let rating = document.createElement('h3');
            rating.textContent = result.show.rating.average;

            let container = document.createElement('div');
            container.className = 'container';

            container.appendChild(img);
            container.appendChild(name);
            container.appendChild(rating);

            document.body.append(container);     
        };
    };
};