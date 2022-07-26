const query = `{
    aboutHeader: headerWithTextCollection(where: {sectionHeader: "About Us"}) {
      items {
        sectionText
      }
    }
    aboutInfo: headerWithTextCollection(where: {sectionHeader: "About Skyzdalimit"}) {
      items {
        sectionText
      }
    }
    ourWork: headerWithTextCollection(where: {sectionHeader: "Our Work"}) {
      items {
        sectionText
      }
    }
    aims: headerWithTextCollection(where: {sectionHeader: "Aims"}) {
      items {
        sectionText
      }
    }
    socialInclusion: headerWithTextCollection(where: {sectionHeader: "Social Inclusion"}) {
      items {
        sectionText
      }
    }
    rehearsals: sectionWithImageCollection(where: {sectionHeader: "Rehearsals"}) {
      items {
        sectionImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        sectionText
      }
    }
    ourHistory: headerWithTextCollection(where: {sectionHeader: "Our History"}) {
      items {
        sectionText
      }
    }
    castCardCollection {
      items {
        castName
        castImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }`;

const fetchOptions = {
  spaceID: "oufsydz2snm5",
  accessToken: "sBqKC-nIBrXkCGQCSeY_IH6pC--EQrRxk7wNeRREWY4",
  endpoint: "https://graphql.contentful.com/content/v1/spaces/oufsydz2snm5",
  method: "POST",
  headers: {
    Authorization: "Bearer sBqKC-nIBrXkCGQCSeY_IH6pC--EQrRxk7wNeRREWY4",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
};

const addAboutHeaderToDom = (items) => {
  items.forEach((item) => {
    // Get the about header P element
    const aboutHeader = document.getElementById('header-about');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      aboutHeader.innerText = item.sectionText;
    }
  });
};

const addAboutInfoToDom = (items) => {
  items.forEach((item) => {
    // Get the about info P element
    const aboutInfo = document.getElementById('about-info');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      aboutInfo.innerText = item.sectionText;
    }
  });
};

const addOurWorkToDom = (items) => {
  items.forEach((item) => {
    // Get the our work P element
    const ourWork = document.getElementById('our-work');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      ourWork.innerText = item.sectionText;
    }
  });
};

const addAimsToDom = (items) => {
  items.forEach((item) => {
    // Get the aims P element
    const aims = document.getElementById('aims');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      aims.innerText = item.sectionText;
    }
  });
};

const addSocialInclusionToDom = (items) => {
  items.forEach((item) => {
    // Get the social inclusion P element
    const socialInclusion = document.getElementById('social-inclusion');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      socialInclusion.innerText = item.sectionText;
    }
  });
};

const addRehearsalsToDom = (items) => {
  items.forEach((item) => {
    // Get the rehearsals text P element
    const rehearsals = document.getElementById('rehearsals-text');
    // Get the third work DIV element
    const workThree = document.getElementById('work-three');
    // Creates an IMG element to hold the image
    const newImgEl = document.createElement("img");

    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      rehearsals.innerText = item.sectionText;
    }
    // Check if we have an image
    if (item.sectionImage) {
      // Provide an image source
      newImgEl.src = item.sectionImage.url;
      // Provide alt text
      newImgEl.alt = item.sectionImage.description;
    }

    // Append the new IMG element to the about page rehearsals element
    workThree.prepend(newImgEl);
  });
};

const addOurHistoryToDom = (items) => {
  items.forEach((item) => {
    // Get the our history P element
    const ourHistory = document.getElementById('our-history');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      ourHistory.innerText = item.sectionText;
    }
  });
};

// const addCastToDom = (items) => {
//   items.forEach((item, counter) => {
//     // Get the carousel DIV element
//     const carousel = document.querySelector('.glider-track');

//     const castCard = document.createElement("div");
//     castCard.classList.add('card-cast');

//     const castImage = document.createElement("img");

//     const castContent = document.createElement("div");
//     castContent.classList.add('card-cast__content');

//     const castName = document.createElement("p");
//     castName.classList.add('card-name');

//     if (item.castName) {
//       castName.innerText = item.castName;
//       castImage.src = item.castImage.url;
//       castImage.alt = item.castImage.description;
//     }

//     castContent.append(castName);
//     castCard.append(castImage);
//     castCard.append(castContent);

//     if (counter % 3 == 0) {
//       const carouselSlide = document.createElement("div");
//       carouselSlide.classList.add('carousel-slide');
//       carouselSlide.append(castCard);
//       carousel.append(carouselSlide);
//     }

//   });
// };

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addAboutHeaderToDom(data.data.aboutHeader.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addAboutInfoToDom(data.data.aboutInfo.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addOurWorkToDom(data.data.ourWork.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addAimsToDom(data.data.aims.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addSocialInclusionToDom(data.data.socialInclusion.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addRehearsalsToDom(data.data.rehearsals.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addOurHistoryToDom(data.data.ourHistory.items));

// fetch(fetchOptions.endpoint, fetchOptions)
//   .then((response) => response.json())
//   .then((data) => addCastToDom(data.data.castCardCollection.items));