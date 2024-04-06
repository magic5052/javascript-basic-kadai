const btn = document.getElementById('btn');
const content = document.getElementById('text');

btn.addEventListener("click", () => {
    content.innerText = "ボタンをクリックしました"
});