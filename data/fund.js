if (!window.chatData) window.chatData = {};

window.chatData['fund'] = {
    title: 'FUND_MANAGER',
    messages: [
        { type: 'date', text: '2025년 10월 1일' },
        { type: 'user', text: 'B4H2에게 9월분 수익 분배금 전송해.' },
        { type: 'system', amount: '190,000,000', receiver: 'B4H2', desc: '정기 용역비 지급' },
        { type: 'ai', text: 'B4H2 님 계좌로 9월분 수익 분배금 세탁 후 전송 완료했습니다.' },

        { type: 'date', text: '2025년 11월 1일' },
        { type: 'user', text: '이번 달 용역비도 지난달과 동일하게 처리해.' },
        { type: 'system', amount: '240,000,000', receiver: 'B4H2', desc: '정기 용역비 지급' },
        { type: 'ai', text: '10월분 정산 완료. 트랜잭션 기록은 삭제 처리했습니다.' },

        { type: 'date', text: '2025년 12월 1일' },
        { type: 'user', text: 'B4H2 정기 송금 진행.' },
        { type: 'system', amount: '220,000,000', receiver: 'B4H2', desc: '정기 용역비 지급' },
        { type: 'ai', text: '11월분 지급 완료되었습니다.' },

        { type: 'date', text: '2025년 12월 11일' },
        { type: 'user', text: 'K-Cloud 쪽 서버 증설 비용 지금 바로 보내.' },
        { type: 'ai', text: '다크웹 믹싱 서버를 경유하여 송금합니다. 추적 불가능합니다.' },
        { type: 'system', amount: '200,000,000', receiver: 'K-CLOUD Solutions', desc: '서버 증설 및 유지보수 (선수금)' },
        { type: 'ai', text: '송금 완료. 의뢰가 접수되었습니다.' }
    ]
};


