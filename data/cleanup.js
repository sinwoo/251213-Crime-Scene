if (!window.chatData) window.chatData = {};

window.chatData['cleanup'] = {
    title: 'CLEANUP_OPERATION',
    messages: [
        { type: 'date', text: '2025년 12월 11일 목요일' },
        { type: 'user', text: '결정했어. 그 녀석을 제거한다. 뒷말 안 나오게 가장 깔끔한 방법이 뭐야?' },
        { type: 'ai', text: '데이터베이스 검색 중... 불운한 사고로 위장하거나 자살로 종결시킬 수 있는 3가지 시나리오를 도출했습니다.' },

        // Option 1: Traffic Accident
        { type: 'user', text: '교통사고는 어때? 흔하잖아.' },
        { type: 'ai', text: '리스크 분석 중... 교통사고의 경우 CCTV 및 블랙박스 확보가 필수적입니다. 목격자 통제가 불가능하여 추천하지 않습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[SCENARIO A: TRAFFIC ACCIDENT]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Control:</span>
                                        <span class="text-danger">LOW (변수 많음)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Evidence:</span>
                                        <span class="text-danger">HIGH RISK (CCTV)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Result:</span>
                                        <span class="text-danger">REJECTED</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },

        // Option 2: Poisoning
        { type: 'user', text: '그럼 독살은? 밥 먹다가 심장마비로 죽은 거로 하면 되잖아.' },
        { type: 'ai', text: '부검 시 99.9% 검출됩니다. 자연사로 위장하기 위해서는 매우 희귀한 독극물이 필요하며, 이는 확보 경로가 추적될 수 있습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[SCENARIO B: POISONING]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Materials:</span>
                                        <span class="text-danger">TRACEABLE (추적 가능)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Autopsy:</span>
                                        <span class="text-danger">DETECTED (검출됨)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Result:</span>
                                        <span class="text-danger">REJECTED</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },

        // Option 3: Staged Suicide (Recommended)
        { type: 'user', text: '하.. 복잡하네. 그럼 제일 확실한 게 뭐야?' },
        { type: 'ai', text: '최적의 솔루션은 "자살 위장"입니다. 타겟의 최근 심리 상태(불안, 우울)를 근거로 수사를 조기 종결시킬 수 있습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="margin-bottom: 10px; font-weight: bold; color: #3fb950;">추천 시나리오: 위장 자살 (Staged Suicide)</div>
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px; margin-bottom: 10px;">
                                <div class="sys-header">[SCENARIO C: SUICIDE]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Feasibility:</span>
                                        <span style="color: #3fb950;">OPTIMAL</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Police:</span>
                                        <span style="color: #3fb950;">CASE CLOSED (종결)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Success Prob:</span>
                                        <span class="sys-data" style="color: #3fb950; border-color: #3fb950; background-color: rgba(63, 185, 80, 0.15);">96.5%</span>
                                    </div>
                                </div>
                            </div>
                            <div style="color: #c9d1d9; font-size: 13px; text-align: center;">
                                "번개탄과 유서를 준비하십시오.<br>타겟을 업로드할 장소는 차후 전송하겠습니다."
                            </div>
                        </div>`
        },
        { type: 'user', text: '그래.. 그게 젤 깔끔하겠네. 준비해.' }
    ]
};
