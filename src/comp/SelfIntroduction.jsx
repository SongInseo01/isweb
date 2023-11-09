import React from 'react';
import './SelfIntroduction.css';

function SelfIntroduction() {
  return (
    <div className="self-introduction-container">
      <div className="profile-picture">
        <img src="https://SongInseo01.github.io/isweb/20201201_unityinseo.png" alt="Profile" />
      </div>
      <div className="introduction-text">
        <h1>이름: 송인서</h1>
        <p>출생: 2001년 2월 25일</p>
        <p>Computer Science</p>
        <p>내용</p>
      </div>
    </div>
  );
}

export default SelfIntroduction;