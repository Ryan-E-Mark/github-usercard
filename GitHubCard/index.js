/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/Ryan-E-Mark')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
// Grabbing the div that will hold all this info
const divCard = document.querySelector('.cards');

const cardMaker = ({ avatar_url, name, login, location, html_url, followers, following, bio }) => {
  //instantiating the elements
  const card = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('div');
  const realName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const userUrl = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollows = document.createElement('p');
  const userBio = document.createElement('p');

  //adding content and classes 
  card.classList.add('card');
  info.classList.add('card-info');
  realName.classList.add('name');
  userName.classList.add('username');

  img.src = avatar_url;
  realName.textContent = name;
  userName.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  userUrl.href = html_url;
  userUrl.textContent = html_url;
  profile.textContent = `Profile: ${userUrl}`;
  userFollowers.textContent = followers;
  userFollows.textContent = following;
  userBio.textContent = bio;

  //setting up structure
  divCard.appendChild(card);
  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(realName);
  info.appendChild(userName);
  info.appendChild(userLocation);
  info.appendChild(profile);
  info.appendChild(userFollowers);
  info.appendChild(userFollows);
  info.appendChild(userBio);

  //returning the info
  return card;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
