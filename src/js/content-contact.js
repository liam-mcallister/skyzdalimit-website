const query = `{
    contactUs: headerWithTextCollection(where: {sectionHeader: "Contact Us"}) {
      items {
        sectionText
      }
    }
    contactCardCollection {
      items {
        email
        phone
        address
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


const addContactHeaderToDom = (items) => {
    items.forEach((item) => {
        // Get the contact header P element
        const contactHeader = document.getElementById('header-contact');
        // Check if we have some text
        if (item.sectionText) {
            // Populate with text
            contactHeader.innerText = item.sectionText;
        }
    });
};

const addContactInfoToDom = (items) => {
    items.forEach((item) => {
        // Get the email P element
        const contactEmail = document.getElementById('contact-email');
        // Get the phone P element
        const contactPhone = document.getElementById('contact-phone');
        // Get the address P element
        const contactAddress = document.getElementById('contact-address');

        // Check if we have some text
        if (item.email) {
            // Populate with text
            contactEmail.innerText = item.email;
        }
        // Check if we have some text
        if (item.phone) {
            // Populate with text
            contactPhone.innerText = item.phone;
        }
        // Check if we have some text
        if (item.address) {
            // Populate with text
            contactAddress.innerText = item.address;
        }
    });
};

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addContactHeaderToDom(data.data.contactUs.items));

fetch(fetchOptions.endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => addContactInfoToDom(data.data.contactCardCollection.items));