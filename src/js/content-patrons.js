const query = `{
    headerWithTextCollection(where: {sectionHeader: "Patrons & Advocates"}) {
      items {
        sectionText
      }
    }
    kerri: sectionWithImageCollection(where: {sectionHeader: "Kerri Quinn"}) {
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
        sectionHeader
        sectionText
      }
    }
    ryan: sectionWithImageCollection(where: {sectionHeader: "Ryan Tracey"}) {
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

const addPatronHeaderToDom = (items) => {
    items.forEach((item) => {
        // Get the patron header P element
        const patronHeader = document.getElementById('header-patron');
        // Check if we have some text
        if (item.sectionText) {
            // Populate with text
            patronHeader.innerText = item.sectionText;
        }
    });
};

const addKerriToDom = (items) => {
    items.forEach((item) => {
        // Get the Kerri card DIV element
        const kerri = document.getElementById('patron-kerri');
        // Get the Kerri content DIV element
        const contentKerri = document.getElementById('content-kerry');

        // Creates an IMG element to hold the image
        const newImgEl = document.createElement("img");
        // Creates an H3 element to hold the header
        const newH3El = document.createElement("h3");
        // Creates an P element to hold the info
        const newPEl = document.createElement("p");

        // Check if we have some text
        if (item.sectionHeader) {
            // Populate with text
            newH3El.innerText = item.sectionHeader;
        }
        // Check if we have some text
        if (item.sectionText) {
            // Populate with text
            newPEl.innerText = item.sectionText;
        }
        // Check if we have an image
        if (item.sectionImage) {
            // Provide an image source
            newImgEl.src = item.sectionImage.url;
            // Provide alt text
            newImgEl.alt = item.sectionImage.description;
        }

        // Append the new IMG element to the Kerri card element
        kerri.prepend(newImgEl);
        // Append the new H3 element to the Kerri card element
        contentKerri.append(newH3El);
        // Append the new P element to the Kerri card element
        contentKerri.append(newPEl);
    });
};

const addRyanToDom = (items) => {
    items.forEach((item) => {
        // Get the Ryan card DIV element
        const ryan = document.getElementById('patron-ryan');
        // Get the Ryan content DIV element
        const contentRyan = document.getElementById('content-ryan');

        // Creates an IMG element to hold the image
        const newImgEl = document.createElement("img");
        // Creates an H3 element to hold the header
        const newH3El = document.createElement("h3");
        // Creates an P element to hold the info
        const newPEl = document.createElement("p");

        // Check if we have some text
        if (item.sectionHeader) {
            // Populate with text
            newH3El.innerText = item.sectionHeader;
        }
        // Check if we have some text
        if (item.sectionText) {
            // Populate with text
            newPEl.innerText = item.sectionText;
        }
        // Check if we have an image
        if (item.sectionImage) {
            // Provide an image source
            newImgEl.src = item.sectionImage.url;
            // Provide alt text
            newImgEl.alt = item.sectionImage.description;
        }

        // Append the new IMG element to the Ryan card element
        ryan.prepend(newImgEl);
        // Append the new H3 element to the Ryan card element
        contentRyan.append(newH3El);
        // Append the new P element to the Ryan card element
        contentRyan.append(newPEl);
    });
};

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addPatronHeaderToDom(data.data.headerWithTextCollection.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addKerriToDom(data.data.kerri.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addRyanToDom(data.data.ryan.items));