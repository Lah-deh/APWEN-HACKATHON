let popupOverlay=document.getElementsByClassName("contain-up")[0];
let popup=document.getElementsByClassName("container-up")[0];
let resultSection=document.getElementsByClassName("body")[0];
let materialRows=document.querySelectorAll(".row");


materialRows.forEach(row =>{
    row.addEventListener("click",() =>{
        popupOverlay.style.display = "block";
        resultSection.classList.add("blur");
    })
})

popupOverlay.addEventListener("click",(e) =>{
    if(!popup.contains(e.target)){
        popupOverlay.style.display = "none";
        resultSection.classList.remove("blur")
    }
});


const exportBtn = document.getElementById('export-pdf');
const resultSectionn = document.getElementById('result-section');

if (exportBtn) {
  exportBtn.addEventListener('click', () => {
    html2pdf().from(resultSectionn).save('Recommended_Materials.pdf');
  });
}
