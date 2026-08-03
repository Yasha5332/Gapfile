'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const ExhibitDemo: React.FC = () => {
  const { t } = useLanguage();
  const [activeCards, setActiveCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setActiveCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="exhibit" role="group" aria-label="Interactive demo">
      <div className="exhibit-label mono">
        <span>{t.exL1}</span>
        <span>{t.exL2}</span>
      </div>

      <div
        className={`review-card ${activeCards[1] ? 'on' : ''}`}
        onClick={() => toggleCard(1)}
      >
        <div>"Sản phẩm ổn nhưng giao hàng chậm quá, đợi cả tuần mới tới..."</div>
        <div className="redact r1"></div>
        <div className="redact r2"></div>
        <div className="stamp-pop">SHIPPING DELAY · ×61</div>
      </div>

      <div
        className={`review-card ${activeCards[2] ? 'on' : ''}`}
        onClick={() => toggleCard(2)}
      >
        <div>"Item tint yellower than picture, CSKH trả lời quá chậm thất vọng"</div>
        <div className="redact r1"></div>
        <div className="stamp-pop">COLOR MISMATCH · ×47</div>
      </div>

      <div
        className={`review-card ${activeCards[3] ? 'on' : ''}`}
        onClick={() => toggleCard(3)}
      >
        <div>"Màu không giống hình, hơi thất vọng, chat hỗ trợ 24h mới rep"</div>
        <div className="redact r1"></div>
        <div className="redact r2"></div>
        <div className="stamp-pop">SUPPORT SLA · ×34</div>
      </div>

      <div className="exhibit-hint mono">
        <span>{t.exH1}</span> &nbsp;·&nbsp; <span>{t.exH2}</span>
      </div>
    </div>
  );
};
