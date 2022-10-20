function createArticle(imgWrapper, cardInfo) {
  return createElement(
    "article",
    { className: "workerCard" },
    imgWrapper,
    cardInfo
  );
}
