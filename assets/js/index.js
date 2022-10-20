const {
  USER_DATA: { DEFAULT_NAME, DESCRIPTION },
} = CONSTANTS;

const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector("#root");

workersList.append(...userCards);
/**
 *
 * @param {object} user
 * @returns {HTMLElement}
 */
function createUserCard(user) {
  const { firstName, lastName, profilePicture, contacts } = user;

  const fullName =
    !firstName && !lastName ? DEFAULT_NAME : `${firstName} ${lastName}`;

  const imgWrapper = createImage({
    fullName,
    profilePicture,
  });

  const cardInfo = createCardInfo(fullName);

  const article = createArticle(imgWrapper, cardInfo);

  const socialMedia = createSocialMediaBlock(contacts);

  return createElement("li", { className: "workerItem" }, article, socialMedia);
}
