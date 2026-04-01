// 🚀 포트폴리오 데이터 세팅 스크립트 (seed_portfolio.js)
// 이 파일은 Firebase에 초기 데이터를 업로드하기 위한 용도입니다.

const firebaseConfig = {
    apiKey: "AIzaSyDJeGRV5CnRoRwqoQ1igrjhHCJHCMow3L4",
    authDomain: "sketchoo-2c343.firebaseapp.com",
    projectId: "sketchoo-2c343",
    storageBucket: "sketchoo-2c343.firebasestorage.app",
    messagingSenderId: "1072809023897",
    appId: "1:1072809023897:web:edc12722ad0d03b4a45b08"
};

// firebase-admin 대신 클라이언트 라이브러리 사용 (브라우저나 간단한 node 환경 가정)
// 실제 환경에선 실행 전 firebase SDK가 로드되어 있어야 합니다.

async function seedData(db) {
    const approvedData = [
        {
            title: "[물류] IMPEX GLS 글로벌 통합 물류 솔루션",
            client: "IMPEX GLS",
            role: "글로벌 공급망 관리 시스템 UI/UX 고도화 및 반응형 최적화",
            desc: "글로벌 물류의 새로운 기준을 제시하는 강력한 트러스트 이미지 및 반응형 정보 최적화",
            content1: "섹션별 직관적인 데이터 시각화와 실시간 트래킹 인터페이스를 통해 복잡한 물류 프로세스를 단순화했습니다.",
            duration: "2개월",
            tags: ["b2b", "renewal"],
            thumb: "https://sketchoo.kr/images/impex_thumb.png", // 예시 URL들
            visual: "https://sketchoo.kr/images/impex_hero.png",
            img1: "https://sketchoo.kr/images/impex_detail1.png",
            img2: "https://sketchoo.kr/images/impex_detail2.png",
            createdAt: new Date()
        },
        // ... (필요 시 추가 데이터 정의)
    ];

    console.log("Starting Seeding...");
    const batch = db.batch();
    approvedData.forEach(item => {
        const newDoc = db.collection("portfolios").doc();
        batch.set(newDoc, item);
    });
    
    await batch.commit();
    console.log("Seeding complete!");
}
