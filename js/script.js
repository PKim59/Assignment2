const darkbutton = document.querySelector("#darkbutton")
const main = document.querySelector("main")
const aside = document.querySelector("aside")
const cancelbutton = document.querySelector(".buttons3")
const newnotebutton = document.querySelector("#newnotebutton");
const savebutton = document.querySelector("#savebutton");
const saveandcancel = document.querySelector("#hidesavecancel");
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
    else {
      darkbutton.textContent = "Dark Mode"
    }
}   

darkbutton.addEventListener("click", themeswap)

function buttontextswap() {
    const textarea = document.querySelector(".textbox textarea");

    if (textarea.classList.contains("hide")) {
        textarea.classList.remove("hide");
        saveandcancel.classList.remove("hide");
      } else {
        if (textarea.value) {
          textarea.value = "";
        }
      }
    };

function cancelswap() {
    const textarea = document.querySelector(".textbox textarea");

    textarea.value = "";
    saveandcancel.classList.add("hide");
    textarea.classList.add("hide");
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

  // comment so that I can re-pull request after fixes.