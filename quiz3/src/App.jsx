import React from 'react';
import './App.css';  // คุณสามารถสร้างไฟล์ CSS สำหรับการจัดรูปแบบของคุณเอง

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile">
          <img
            src="quiz3\src\image\profile.jpg"
            alt="Profile"
            className="profile-picture"
          />
          <div className="about-me">
            <h1>MR. JAKKRIN <br/>
            SUNSANASUPHONG</h1>
            <p>
              สนใจตำแหน่ง back-end และ mobile app ครับ สามารถสื่อสารกับผู้ใช้ได้ดี
            </p>
            <button className="contact-button">CONTACT</button>
          </div>
        </div>
        <div className="education">
          <h2>การศึกษา</h2>
          <ul>
            <li>
              <strong>Silpakorn University</strong>
              <br />
              Bachelor of Science COMPUTER SCIENCE<br/>
              (2021 - ปัจจุบัน)
            </li>
            <li>
              <strong>RATCHABORIKANUKROH SCHOOL</strong>
              <br />
              ประกาศนียบัตรระดับมัธยมศึกษา (สายวิทย์-คณิต คะแนนเฉลี่ย: 2.91, 2015 - 2021)
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
