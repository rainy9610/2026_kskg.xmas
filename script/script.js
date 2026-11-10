// 1. 取得 DOM 元素（網頁上的按鈕與區塊）
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const wishModal = document.getElementById('wish-modal');

const toggleAdminBtn = document.getElementById('toggle-admin-btn');
const adminPanel = document.getElementById('admin-panel');
const adminOnlyButtons = document.querySelectorAll('.admin-only');

// 2. 顯示與關閉「寫下願望」彈窗 (Modal)
openModalBtn.addEventListener('click', () => {
    wishModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    wishModal.classList.add('hidden');
});

// 點擊彈窗外部背景也可以關閉彈窗
wishModal.addEventListener('click', (event) => {
    if (event.target === wishModal) {
        wishModal.classList.add('hidden');
    }
});

// 3. 切換「管理者模式」畫面預覽
// （目前僅以切換 hidden 類別來示範顯示/隱藏後台控制列與刪除按鈕）
let isAdmin = false;

toggleAdminBtn.addEventListener('click', () => {
    isAdmin = !isAdmin; // 切換狀態

    if (isAdmin) {
        adminPanel.classList.remove('hidden');
        toggleAdminBtn.innerText = "🔓 退出管理模式";
        // 顯示所有卡片上的刪除按鈕
        adminOnlyButtons.forEach(btn => btn.classList.remove('hidden'));
    } else {
        adminPanel.classList.add('hidden');
        toggleAdminBtn.innerText = "🔒 管理員模式";
        // 隱藏所有卡片上的刪除按鈕
        adminOnlyButtons.forEach(btn => btn.classList.add('hidden'));
    }
});
