const form = document.getElementById("github-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const searchInput = document.getElementById("search");
  const username = searchInput.value;
  const url = `https://api.github.com/search/users?q=${username}`;

  const headers = new Headers();
  headers.append("Accept", "application/vnd.github.v3+json");

  fetch(url, { headers })
    .then((res) => res.json())
    .then(function (results) {
      results.forEach((user) => {
        displayUser(user);
      });
    });
});

