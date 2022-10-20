function createSocialMediaBlock(contacts) {
  const links = [];
  for (const contact of contacts) {
    const linkPic = createElement("img", {
      className: "linkPic",
      attributes: {
        alt: new URL(contact).hostname,
        src: SOC_NETWORKS_MAP.get(new URL(contact).hostname),
      },
    });
    const link = createElement(
      "a",
      {
        attributes: {
          href: contact,
        },
      },
      linkPic
    );
    const linkItem = createElement("li", { className: "linkItem" }, link);
    links.push(linkItem);
  }

  const linksList = createElement("ul", { className: "linksList" }, ...links);

  return createElement("div", { className: "linksContainer" }, linksList);
}
