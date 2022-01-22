const generateButton = document.getElementById('generate-bg-btn');
const cardBg = document.getElementById('card-bg');
const usernameSpan = document.getElementById('username');
const avatarImg = document.getElementById('avatar');
const followersSpan = document.getElementById('followers-qnt');
const followingSpan = document.getElementById('following-qnt');
const repositoriesSpan = document.getElementById('repositories-qnt');
const companySpan = document.getElementById('company');
const locationSpan = document.getElementById('location');

const tooltipContainer = document.getElementById('tooltip-container');
const tooltipText = document.getElementById('tooltip-text');

const downloadCard = document.getElementById('download-card-btn');

tooltipContainer.addEventListener('click', () => {
  navigator.clipboard.writeText('https://github.com/saymondamasio');
  tooltipText.innerText = 'Copiado!';
})

tooltipContainer.addEventListener('mouseover', () => {
  tooltipText.innerText = 'Click para copiar';
})

downloadCard.addEventListener('click', async () => {
  const canvas = await html2canvas(cardBg, {
    useCORS: true,
    backgroundColor: null
  })
  const image = canvas.toDataURL("image/png");

  const imageLink = document.createElement('a');
  imageLink.download = 'rocketcard.png';
  imageLink.href = image;
  imageLink.click();
  imageLink.remove();
})

generateButton.addEventListener('click', () => {
  cardBg.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
})

async function getCredentialsGithub() {
  const credentialsResponse = await fetch('https://api.github.com/users/saymondamasio');
  const { avatar_url, login, company, location, followers, following, public_repos } = await credentialsResponse.json()

  avatarImg.src = avatar_url;
  usernameSpan.innerText = login;
  companySpan.innerText = company;

  if (!company) {
    companySpan.parentElement.remove();
  }

  locationSpan.innerText = location;
  followersSpan.innerText = followers;
  followingSpan.innerText = following;
  repositoriesSpan.innerText = public_repos;
}

getCredentialsGithub()