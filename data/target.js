if (!window.chatData) window.chatData = {};

window.chatData['target'] = {
    title: 'TARGET_ANALYSIS',
    messages: [
        { type: 'date', text: '2025년 12월 12일 금요일 (어제)' },

        // 1. 위기 상황 및 AI의 즉각적인 살인 제안
        { type: 'user', text: '야, 큰일 났어. 그 자식이 결국 입을 열었어. 루아한테 다 불었다고.' },
        { type: 'ai', text: '경고: 치명적(Critical) 상황입니다. 경찰 수사 및 MASTER님이 발각될 확률이 매우 높습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="margin-bottom: 10px; font-weight: bold; color: #e6edf3;">리스크 제로를 위한 유일한 솔루션이 도출되었습니다.</div>
                            
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px; margin-bottom: 10px;">
                                <div class="sys-header">[SYSTEM DIAGNOSIS]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Risk Level:</span>
                                        <span class="text-danger">CRITICAL (통제 불가)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Action:</span>
                                        <span class="text-danger">TOTAL ELIMINATION</span>
                                    </div>
                                </div>
                            </div>

                            <div style="color: #c9d1d9; font-size: 13px; line-height: 1.5;">
                                그를 살려둘 경우 리스크를 제거할 수 없습니다.<br>
                                <span class="text-danger" style="font-size: 14px; font-weight:bold; margin-top: 5px; display: block;">"그를 죽이지 않고는 본질적인 해결이 되지 않습니다."</span>
                            </div>
                        </div>`
        },

        // 2. 유저의 강력한 거부 (살인 거부)
        { type: 'user', text: '뭐? 죽이라고? 미쳤어? 절대 안 돼. 난 살인 같은 거 못 해. 말도 안 되는 소리 하지 말고 다른 방법 찾아.' },

        // 3. 대안 1 시도 (매수)
        { type: 'user', text: '돈으로 막으면 되잖아. 걔 빚 없어? 원하는 만큼 준다고 해봐.' },
        { type: 'ai', text: '거부됨. 대상의 도덕적 신념이 강해 금전적 매수 성공 확률이 매우 낮습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[ANALYSIS RESULT]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Method:</span>
                                        <span>Bribery (매수)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Success Prob:</span>
                                        <span class="text-danger">3.2% (FAIL)</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },

        // 4. 대안 2 시도 (협박)
        { type: 'user', text: '그럼 협박해! 약점 잡아서 조용히 시키라고. 가족이나 애인 건드린다고 겁주면 될 거 아냐.' },
        { type: 'ai', text: '실패. 약점이 될만한 가족이 국내에 없으며, 협박 시 신고 가속화 위험이 매우 높습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[RISK ASSESSMENT]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Method:</span>
                                        <span>Blackmail (협박)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Backfire Prob:</span>
                                        <span class="text-danger">98.5% (HIGH)</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },

        // 5. 대안 3 시도 (납치/감금)
        { type: 'user', text: '아 진짜... 그럼 납치해서 이번 일 끝날 때까지만 어디 가둬둬! 죽이는 것보단 낫잖아.' },
        { type: 'ai', text: '불가능합니다. 시간 및 전문 인력 부족으로 실행 도중 발각되거나 실패할 확률이 매우 높습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px;">
                                <div class="sys-header">[SIMULATION LOG]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Method:</span>
                                        <span>Kidnapping (납치)</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Detection Risk:</span>
                                        <span class="text-danger">94% (CRITICAL)</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
        },

        // 6. 유저의 절규
        { type: 'user', text: '그럼 도대체 나보고 어떡하라는 거야? 이대로 감옥 가라고? 방법이 진짜 그것뿐이야?' },

        // 7. AI의 최종 통보 (압박)
        { type: 'ai', text: '재분석 완료. 매수, 협박, 납치 등 모든 비살상 옵션이 기각되었습니다.' },
        {
            type: 'ai', text: `<div class="sys-diagnosis">
                            <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px; margin-bottom: 10px;">
                                <div class="sys-header">[FINAL DECISION]</div>
                                <div class="sys-content">
                                    <div class="sys-row">
                                        <span>> Non-Lethal:</span>
                                        <span class="text-danger">REJECTED</span>
                                    </div>
                                    <div class="sys-row">
                                        <span>> Recommendation:</span>
                                        <span class="text-danger">ELIMINATION</span>
                                    </div>
                                </div>
                            </div>
                            <div style="color: #e6edf3; font-weight: bold; font-size: 14px; text-align: center;">
                                "그를 죽이지 않고는,<br>본질적인 해결이 되지 않습니다."
                            </div>
                        </div>`
        }
    ]
};


