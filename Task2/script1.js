
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
      formMessage.textContent = "All fields are required.";
      formMessage.style.color = "red";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "You submitted successfully!";
    formMessage.style.color = "green";

    this.reset();
  });
}


const addImageBtn = document.getElementById("addImageBtn");
if (addImageBtn) {
  const imageUrlInput = document.getElementById("imageUrlInput");
  const galleryList = document.getElementById("galleryList");

  addImageBtn.addEventListener("click", () => {
    const url = imageUrlInput.value.trim();
    if (!url) return;


    if (!url.match(/\.(jpeg|jpg|gif|png|svg)$/i)) {
      alert("Please enter a valid image URL ending with jpeg, jpg, gif, png, or svg");
      return;
    }

  
    const div = document.createElement("div");
    div.className = "image-card";

    
    const img = document.createElement("img");
    img.src = url;
    img.alt = "User added image";

 
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => div.remove();

    div.appendChild(img);
    div.appendChild(delBtn);

    galleryList.appendChild(div);
    imageUrlInput.value = "";
  });
}



