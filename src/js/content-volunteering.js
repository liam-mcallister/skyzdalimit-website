const query = `{
    volunteering: headerWithTextCollection(where: {sectionHeader: "Volunteering"}) {
      items {
        sectionText
      }
    }
    howTo: headerWithTextCollection(where: {sectionHeader: "How to Volunteer"}) {
      items {
        sectionText
      }
    }
    applicationFileCollection {
      items {
        volunteeringApplication {
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
    volunteerCardCollection {
      items {
        volunteerName
        volunteerImage {
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

const addVolunteeringHeaderToDom = (items) => {
  items.forEach((item) => {
    // Get the about header P element
    const volunteeringHeader = document.getElementById('header-volunteering');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      volunteeringHeader.innerText = item.sectionText;
    }
  });
};

const addHowToToDom = (items) => {
  items.forEach((item) => {
    // Get the about header P element
    const howTo = document.getElementById('how-to');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      howTo.innerText = item.sectionText;
    }
  });
};

const regFormToDom = (items) => {
  items.forEach((item) => {
    // Get the registration form A element
    const formLink = document.getElementById('reg-form');
    // Check if we have a file
    if (item.volunteeringApplication) {
      // Add the href to the A element
      formLink.href = item.volunteeringApplication.url;
    }
  });
};

const addVolunteersToDom = (items) => {
  items.forEach((item) => {
    const volunteerGrid = document.getElementById('volunteer-grid');
    const cardDiv = document.createElement("div");
    cardDiv.classList.add('card-person');
    const volunteerImage = document.createElement("img");
    const cardContent = document.createElement("div");
    cardContent.classList.add('card-person__content');
    const volunteerName = document.createElement("h3");
    volunteerName.classList.add('card-name');

    if (item.volunteerName) {
      volunteerName.innerText = item.volunteerName;
      volunteerImage.src = item.volunteerImage.url;
      volunteerImage.alt = item.volunteerImage.description;
    }

    cardContent.append(volunteerName);
    cardDiv.append(volunteerImage);
    cardDiv.append(cardContent);
    volunteerGrid.prepend(cardDiv);
  });
};

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addVolunteeringHeaderToDom(data.data.volunteering.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addHowToToDom(data.data.howTo.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => regFormToDom(data.data.applicationFileCollection.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addVolunteersToDom(data.data.volunteerCardCollection.items));