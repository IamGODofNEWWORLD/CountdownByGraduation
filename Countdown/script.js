const count = document.getElementById("count");
const per = document.getElementById("per");

updateProgress();

function updateProgress() {
    const progress = getDateForCount();
    const percent = Math.min((progress / 1825) * 100, 100);
    per.textContent = percent.toFixed(1);
    count.style.setProperty("--progress", percent);
    count.value = progress;
}

function getDateForCount() {
    const now = new Date();
    const start = new Date(2025, 3, 5); // 入学日（2025年4月5日）
    const diff = now - start;
    return Math.floor(diff / (1000 * 60 * 60 * 24)); // 日数に変換
}
