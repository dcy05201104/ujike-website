const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.fade-in');
hiddenElements.forEach((el) => observer.observe(el));

// --- ヒーロー画像のスライドショー設定 ---
// 1. 全ての画像（.hero-slide）を取得してリストにする
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0; // 現在表示されている画像の番号（0からスタート）

function nextSlide() {
    // 2. 今表示されている画像から「active（表示）」クラスを消す
    slides[currentSlide].classList.remove('active');

    // 3. 次の画像の番号を計算する
    // (現在の番号 + 1) を 全体の枚数で割った「余り」を出すことで、
    // 0→1→2→3→4 と進み、次はまた 0 に戻るループが作れます
    currentSlide = (currentSlide + 1) % slides.length;

    // 4. 次の画像に「active（表示）」クラスを付ける
    slides[currentSlide].classList.add('active');
}

// 5. 5000ミリ秒（5秒）ごとに「nextSlide」という命令を実行する
setInterval(nextSlide, 5000);