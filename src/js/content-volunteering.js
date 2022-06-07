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

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addVolunteeringHeaderToDom(data.data.volunteering.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addHowToToDom(data.data.howTo.items));