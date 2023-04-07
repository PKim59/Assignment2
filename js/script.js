const darkbutton = document.querySelector("#darkbutton")
const main = document.querySelector("main")
const aside = document.querySelector("aside")
const cancelbutton = document.querySelector(".buttons3")
const newnotebutton = document.querySelector("button:first-of-type");
const savebutton = document.querySelector("#savebutton");
const saveandcancel = document.querySelector(".buttons2");
const notesarray = [
    { title: "note one", body: "this is my first note" },
    { title: "note two", body: "this is my second note" }
]
const sidebarlist = document.querySelector(".sidebar ul");


function themeswap() {
    aside.classList.toggle("darktheme2");
    main.classList.toggle("darktheme");
    if (main.classList.contains("darktheme")) {
        darkbutton.textContent = "Light Mode"
    }
}   

darkbutton.addEventListener("click", themeswap)

function buttontextswap() {
    const textarea = document.querySelector(".textbox textarea");

    if (textarea.style.display === "none") {
        textarea.style.display = "block";
        saveandcancel.style.display = "flex";
        newnotebutton.innerText = "Clear Note";
      } else {
        if (textarea.value) {
          textarea.value = "";
          newnotebutton.innertext = "New Note"
        } else {
          textarea.style.display = "none";
          saveandcancel.style.display = "none";
          newnotebutton.innerText = "New Note";
        }
      }
    };

function cancelswap() {
    const textarea = document.querySelector(".textbox textarea");

    textarea.value = "";
    textarea.style.display = "none";
    saveandcancel.style.display = "none";
    newnotebutton.innerText = "New Note";
}

cancelbutton.addEventListener("click", cancelswap)
newnotebutton.addEventListener("click", buttontextswap)

function savetolist() {
    const notetitle = prompt("Enter the title of your note:");
    const textareacontent = document.querySelector(".textbox textarea").value;

    if (notetitle && textareacontent) {
        const newnote = {title: notetitle, body: textareacontent};
        notesarray.push(newnote);
    
        const newsave = document.createElement("li");
        newsave.textContent = notetitle;
        sidebarlist.appendChild(newsave);
    
        document.querySelector("textarea").value = "";
      }
}

savebutton.addEventListener("click", savetolist);

notesarray.forEach(function(note) {
    const newsave = document.createElement("li");
    newsave.textContent = note.title;
    sidebarlist.appendChild(newsave);
});


function loadnote(event) {
    const clickedli = event.target.closest('li');
    
    if (clickedli) {
      const notetitle = clickedli.textContent;
    
      const note = notesarray.find(note => note.title === notetitle);
    
      if (note) {
        const textarea = document.querySelector(".textbox textarea");
        textarea.value = note.body;
      }
    }
  }
  
  sidebarlist.addEventListener("click", loadnote);