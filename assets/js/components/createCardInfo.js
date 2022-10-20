function createCardInfo(fullName) {
  const cardName = createElement("h1", { className: "cardName" }, fullName);
  const cardDescription = createElement(
    "p",
    { className: "cardDescription" },
    DESCRIPTION
  );

  return createElement(
    "div",
    { className: "cardInfo" },
    cardName,
    cardDescription
  );
}
