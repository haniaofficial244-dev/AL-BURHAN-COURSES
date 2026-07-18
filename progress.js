let chapters = document.querySelectorAll(".chapter");
let progressBar = document.getElementById("progressBar");
let percent = document.getElementById("percent");

let completed = 0;

function complete(chapter){
    if(!chapter.classList.contains("done")){
        chapter.classList.add("done");
        completed++;

        let total = chapters.length;
        let value = Math.round((completed / total) * 100);

        progressBar.value = value;
        percent.innerHTML = value + "%";
    }
}
