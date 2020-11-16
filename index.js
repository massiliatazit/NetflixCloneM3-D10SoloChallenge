const url = "https://striveschool-api.herokuapp.com/api/movies/";

let Container = document.querySelector(".allLists");

window.onload = async () => {
  try {
    let response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNjgyZTQxNjJkMzAwMTdjMGI1YjEiLCJpYXQiOjE2MDUyNjU0NTQsImV4cCI6MTYwNjQ3NTA1NH0.-XHS3eGsX-wnyWU4_zwxtwO-JQpqj45wSD4HbySkUWA",
      },
    });

    let categories = await response.json();

    console.log(categories);

    await categories.forEach(async (category) => {
      let second_response = await fetch(url + category, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFlNjgyZTQxNjJkMzAwMTdjMGI1YjEiLCJpYXQiOjE2MDUyNjU0NTQsImV4cCI6MTYwNjQ3NTA1NH0.-XHS3eGsX-wnyWU4_zwxtwO-JQpqj45wSD4HbySkUWA",
        },
      });
   
    let movies = await second_response.json();
    console.log(movies)
    const row = document.createElement('div');
    row.className='row';
    const title = document.createElement('h5');
    title.innerText=category;
    row.appendChild(title);
   Container.appendChild(row);
   
  
});
} catch (error) {
  console.log(error);
}
};
