const query = `{
    headerCollection {
      items {
        headerText
      }
    }
    homeMastheadCollection {
      items {
        showTitle
        showDescription
        showImage {
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
    ourMissionCollection {
      items {
        ourMissionHeader
        ourMissionText
        ourVisionHeader
        ourVisionText
        ourValuesHeader
        ourValuesText
      }
    }
    statsCollection {
      items {
        statOne
        statOneText
        statTwo
        statTwoText
        statThree
        statThreeText
      }
    }
    headerWithTextCollection(where: {sectionHeader: "Our Funders"}) {
      items {
        sectionHeader
        sectionText
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

const addContentToDom = (items) => {
    items.forEach((item) => {
        // Creates a p element to hold the text
        const newItemEl = document.createElement("p");
        // Add a class to the new p element
        newItemEl.classList.add("header-text");
        // Get the home page header element
        const headerEl = document.getElementById('header-home');
        // Check if we have some text
        if (item.headerText) {
            // Populate with text
            newItemEl.innerText = item.headerText;
        }
        // Append the new P element to the home page header element
        headerEl.prepend(newItemEl);
    });
};

const addComingSoonToDom = (items) => {
    items.forEach((item) => {
        // Creates a H3 element to hold the text
        const newH3El = document.createElement("h3");
        // Creates a P element to hold the text
        const newPEl = document.createElement("p");
        // Creates an Img element to hold the image
        const newImgEl = document.createElement("img");

        // Get the coming soon text container element
        const comingSoonText = document.getElementById('coming-soon__show__info');
        // Get the coming soon img container element
        const comingSoonImg = document.getElementById('coming-soon__show__img');

        // Check if we have some text
        if (item.showTitle) {
            // Populate with text
            newH3El.innerText = item.showTitle;
        }
        // Check if we have some text
        if (item.showDescription) {
            // Populate with text
            newPEl.innerText = item.showDescription;
        }
        // Check if we have an image
        if (item.showImage) {
            // Provide an image source
            newImgEl.src = item.showImage.url;
            // Provide alt text
            newImgEl.alt = item.showImage.description;
        }

        // Append the new H3 element to the home page coming soon element
        comingSoonText.append(newH3El);
        // Append the new P element to the home page coming soon element
        comingSoonText.append(newPEl);
        // Append the new Img element to the home page coming soon element
        comingSoonImg.append(newImgEl);
    });
};

const addMissionToDom = (items) => {
    items.forEach((item) => {
        // Creates a P element to hold the text
        const missionHeader = document.createElement("h2");
        const missionText = document.createElement("p");
        const visionHeader = document.createElement("h3");
        const visionText = document.createElement("p");
        const valuesHeader = document.createElement("h3");
        const valuesText = document.createElement("ul");

        // Get the mission section
        const missionEl = document.getElementById('mission__content');

        // Check if we have some text
        if (item.ourMissionHeader) {
            // Populate with text
            missionHeader.innerText = item.ourMissionHeader;
        }
        if (item.ourMissionText) {
            // Populate with text
            missionText.innerText = item.ourMissionText;
        }
        if (item.ourVisionHeader) {
            visionHeader.innerText = item.ourVisionHeader;
        }
        if (item.ourVisionText) {
            visionText.innerText = item.ourVisionText;
        }
        if (item.ourValuesHeader) {
            valuesHeader.innerText = item.ourValuesHeader;
        }
        if (item.ourValuesText) {
            for (bullet of item.ourValuesText) {
                let li = document.createElement('li');
                li.textContent = bullet;
                valuesText.appendChild(li);
            }
        }

        missionEl.prepend(valuesText);
        missionEl.prepend(valuesHeader);
        missionEl.prepend(visionText);
        missionEl.prepend(visionHeader);
        missionEl.prepend(missionText);
        missionEl.prepend(missionHeader);
    });
};

const addStatsToDom = (items) => {
    items.forEach((item) => {
        const statOneHeader = document.createElement("h2");
        const statOneText = document.createElement("p");
        const statTwoHeader = document.createElement("h2");
        const statTwoText = document.createElement("p");
        const statThreeHeader = document.createElement("h2");
        const statThreeText = document.createElement("p");

        const statOne = document.getElementById('statOne');
        const statTwo = document.getElementById('statTwo');
        const statThree = document.getElementById('statThree');

        if (item.statOne) {
            statOneHeader.innerText = item.statOne;
        }
        if (item.statOneText) {
            statOneText.innerText = item.statOneText;
        }
        if (item.statTwo) {
            statTwoHeader.innerText = item.statTwo;
        }
        if (item.statTwoText) {
            statTwoText.innerText = item.statTwoText;
        }
        if (item.statThree) {
            statThreeHeader.innerText = item.statThree;
        }
        if (item.statThreeText) {
            statThreeText.innerText = item.statThreeText;
        }

        statOne.append(statOneHeader);
        statOne.append(statOneText);
        statTwo.append(statTwoHeader);
        statTwo.append(statTwoText);
        statThree.append(statThreeHeader);
        statThree.append(statThreeText);
    });
};

const addFundersToDom = (items) => {
    items.forEach((item) => {

        const fundersHeader = document.createElement("h2");
        const fundersText = document.createElement("p");

        const fundersInfo = document.getElementById('fundersInfo');

        if (item.sectionHeader) {
            fundersHeader.innerText = item.sectionHeader;
        }
        if (item.sectionText) {
            fundersText.innerText = item.sectionText;
        }

        fundersInfo.append(fundersHeader);
        fundersInfo.append(fundersText);
    });
};

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addContentToDom(data.data.headerCollection.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addComingSoonToDom(data.data.homeMastheadCollection.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addMissionToDom(data.data.ourMissionCollection.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addStatsToDom(data.data.statsCollection.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addFundersToDom(data.data.headerWithTextCollection.items));