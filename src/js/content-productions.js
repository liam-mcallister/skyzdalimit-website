const query = `{
  headerWithTextCollection(where: {sectionHeader: "Our Productions"}) {
    items {
      sectionText
    }
  }
  timelineCardCollection {
    items {
      showDate
      showName
      showDescription
    }
  }
  galleryCollection {
    items {
      galleryImagesCollection {
        items {
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

const addProductionsHeaderToDom = (items) => {
  items.forEach((item) => {
    // Get the about header P element
    const productionsHeader = document.getElementById('header-productions');
    // Check if we have some text
    if (item.sectionText) {
      // Populate with text
      productionsHeader.innerText = item.sectionText;
    }
  });
};

const addGalleryToDom = (items) => {
  items.forEach((item) => {
    const images = item.galleryImagesCollection.items;
    images.forEach((image) => {
      // Get the gallery element
      const gallery = document.getElementById('gallery');
      // Creates an A element to hold the image
      const baguetteBoxLink = document.createElement("a");
      // Creates an IMG element
      const newImgEl = document.createElement("img");

      // Check if we have images
      if (image) {
        // Provide image source for A element
        baguetteBoxLink.href = image.url;
        // Provide an image source
        newImgEl.src = image.url;
        // Provide alt text
        newImgEl.alt = image.description;
      }

      baguetteBoxLink.append(newImgEl);
      gallery.append(baguetteBoxLink);
    })
  });
};

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addProductionsHeaderToDom(data.data.headerWithTextCollection.items));

fetch(fetchOptions.endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => addGalleryToDom(data.data.galleryCollection.items));