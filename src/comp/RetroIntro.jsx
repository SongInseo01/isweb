import React, { useState } from 'react';
import './RetroIntro.css';
import SelfIntroduction from './SelfIntroduction';
import Career from './Career';

function RetroIntro() {
  const [inputValue, setInputValue] = useState('');
  const [showSelfIntroduction, setShowSelfIntroduction] = useState(false);
  const [showCareer, setShowCareer] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setShowSelfIntroduction(false);
    setShowCareer(false);

    if (inputValue === '1') {
      setShowSelfIntroduction(true);
    } else if (inputValue === '2') {
      setShowCareer(true);
    } else {
      alert('입력된 값에 해당하는 페이지가 없습니다.');
    }
  };

  return (
    <div className="retro-container">
      <div className="monitor">
        <div className="screen">
          <h1 className="green-text">WELCOME! MY NAME IS SONGINSEO!</h1>
          <p className="green-text">1. 자기소개서</p>
          <p className="green-text">2. 경력</p>
          <p className="green-text">3. 자격증</p>
          <div className="input-container">
            <div className="input-box">
              <input
                type="text"
                placeholder="숫자입력"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleButtonClick}>확인</button>
          </div>
        </div>
      </div>
      {showSelfIntroduction && <SelfIntroduction />}
      {showCareer && <Career />}
    </div>
  );
}

export default RetroIntro;
