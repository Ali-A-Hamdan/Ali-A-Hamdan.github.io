// NBSA boundary
const earnedCredits = window.prompt("Aantal behaalde EC's tot nu toe", 0);
const nbsaBoundary = document.createElement("button");
const nbsaBoundaryBox = document.querySelector("#nbsa");
nbsaBoundaryBox.appendChild(nbsaBoundary);
if (earnedCredits < 45) {
    nbsaBoundary.className = ("nbsa-boundary-background-yellow");
    nbsaBoundary.innerHTML = (`45 EC's are not earend yet You have now ${earnedCredits} EC's`);
} else {
    nbsaBoundary.className = ("nbsa-boundary-background-green");
    nbsaBoundary.innerHTML = (` 45 EC's are earend. You have now ${earnedCredits} EC's`);
};