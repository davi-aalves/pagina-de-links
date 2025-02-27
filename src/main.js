import profileData from "/profile.json";

document.title = "Links de " + profileData.name + " " + profileData.lastName;

window.onload = function () {
  const avatarImage = domuent.querySelector(".card-header__profile-image");
  const name = document.querySelector(".card-header__name");
  const lastName = document.querySelector(".card-header__last-name");
  const description = document.querySelector(".card-header__description");

  const linksList = document.querySelector(".card__links");
  const socialLinks = document.querySelector(".card__social-links");

  avatarImage.src = profileData.avatar;
  avatarImage.alt =
    "Imagem de perfil de " + profileData.name + " " + profileData.lastName;

  lastName.textContent = profileData.lastName;
  name.textContent = profileData.lastName;
  name.appendChild(lastName);

  description.textContent = profileData.description;

  profileData.links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = link.href;
    a.textContent = link.text;
    a.target = "_blank";

    li.appendChild(a);
    linksList.appendChild(li);
  });
};
