const btn = document.getElementById('btn');
const content = document.getElementById('text');



btn.addEventListener("click", () => {
    setTimeout(() => {
        content.innerHTML = "ボタンをクリックしました";
    }, 2000)
})
