if (!window.chatData) window.chatData = {};

window.chatData['supply'] = {
    title: 'SUPPLY_CHAIN_MGT',
    messages: [
        // 1. 선박 입항 및 밀수 단계
        { type: 'date', text: '2025년 12월 8일 월요일' },
        { type: 'user', text: '이번 주 물량 스케줄 브리핑해. 선장쪽 문제없어?' },
        { type: 'ai', text: '데이터 확인 중... "뿅뿅이호"의 현재 위치를 추적했습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[TRACKING LOG]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Target:</span>
                                        <span>Vessel "BB-01" (뿅뿅이호)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Status:</span>
                                        <span style="color: #3fb950;">ENTERED (공해상 진입)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Route:</span>
                                        <span>Detour B-2 (해경 회피)</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },
        { type: 'user', text: '저번처럼 지연되면 곤란해. 세관 쪽 데이터는?' },
        { type: 'ai', text: '세관 통관 시스템(UNI-PASS) 접속 성공. 화물 코드를 "냉동 수산물"로 위조 완료했습니다. 검역 패스 확률 99.8%입니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[SYSTEM ACCESS: UNI-PASS]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Login:</span>
                                        <span style="color: #3fb950;">SUCCESS (Admin)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Cargo Code:</span>
                                        <span>FROZEN_SEAFOOD (위조됨)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Pass Rate:</span>
                                        <span class="sys-data">99.8%</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },
        { type: 'user', text: '좋아. 김준호한테 전해. 물건 내리자마자 바로 신호 보내라고.' },

        // 2. 중간책(강주현) 인계 및 확인
        { type: 'date', text: '2025년 12월 9일 화화요일' },
        { type: 'user', text: '강주현이 물건 픽업했나? GPS 위치 띄워.' },
        { type: 'ai', text: '강주현 님의 위치 신호가 잡혔습니다. 실시간 경로 전송합니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[GPS TRACKER]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Target:</span>
                                        <span>Kang (Transporter)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Location:</span>
                                        <span>Safe House #3 (이동 중)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Status:</span>
                                        <span style="color: #3fb950;">SECURE</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },
        { type: 'user', text: '중량 체크 확실히 하라고 해. 배달 중에 1그램이라도 비면 손목 하나라고 전해.' },
        { type: 'ai', text: '메시지 전송 완료.' },
        { type: 'ai', text: '답신 수신됨: "걱정 마십쇼. 포장지 뜯지도 않았습니다. - 강주현"' },
        { type: 'user', text: '오케이. 오늘 밤에 내가 가서 직접 수령한다. 소분 작업 준비해놔.' },

        // 3. 소매책(양선희) 배포 및 위기 감지
        { type: 'date', text: '2025년 12월 10일 수요일' },
        { type: 'user', text: '분류 끝났어. A급은 내가 챙겼고, B급은 양선희한테 넘겼다. 판매 현황 어때?' },
        { type: 'ai', text: '현재 시각 기준, 다크웹 내 트래픽 및 거래량을 분석했습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[MARKET ANALYSIS]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Channel:</span>
                                        <span>Dealer_Y (Telegram)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Traffic:</span>
                                        <span class="text-danger">SURGE (급증)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Sales:</span>
                                        <span class="sys-data">30 Trans/12h</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },
        { type: 'user', text: '...너무 빠른데? 걔가 좀 급하게 구는 것 같은데.' },
        { type: 'date', text: '2025년 12월 12일 금금요일' },
        { type: 'ai', text: '경고! 비인가 외부 접속이 감지되었습니다. 보안 프로토콜을 가동합니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="margin-bottom: 10px; font-weight: bold; color: var(--danger);">경고: 트래픽 분석 중 이상 징후 포착</div>
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[SECURITY ALERT]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Threat:</span>
                                        <span class="text-danger">IP SCANNING</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Source:</span>
                                        <span>LUA DETECTIVE AGENCY</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Risk:</span>
                                        <span class="text-danger">HIGH</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },
        { type: 'user', text: '하.. 젠장. 냄새 맡았나 보군. 루아가 눈치챈 게 이거였어.' },
        { type: 'user', text: '야, 당장 양선희한테 연락해서 소매 판매 올스톱시켜. 당분간 죽은 듯이 있으라고 해. 몸 사려야 한다고.' },
        { type: 'ai', text: '긴급 상황입니다. 즉시 모든 하위 조직에 "Freeze" 명령을 하달합니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px; margin-bottom: 5px;">
                                <div class="sys-header">[COMMAND EXECUTED]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Code:</span>
                                        <span class="text-danger">FREEZE (잠수)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Target:</span>
                                        <span>ALL DEALERS</span>
                                    </div>
                                </div>
                            </div>
                            <div style="color: #c9d1d9; font-size: 13px; text-align: center;">
                                "당분간 모든 거래를 중단하십시오.<br>추적 리스크가 임계점을 넘었습니다."
                            </div>
                        </div>`
        }
    ]
};



