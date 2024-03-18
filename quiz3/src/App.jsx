import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile">
          <img
            src="image/profile.jpg"
            alt="Profile"
            className="profile-picture"
          />
          <div className="name">
            <h1 className='firstname'>MR. JAKKRIN</h1>
            <h1 className='lastname'>SUNSANASUPHONG</h1>
            <p>
              นายจักริน ศันสนะศุภพงศ์
            </p>
          </div>
        </div>

      </header>
      <body>
        <div className="container">
          <div className="about-me">
            <h2>About Me</h2>
            <p>Interested in front-end</p>
            <p>and mobile app</p>
            <p>positions. I can</p>
            <p>communicate well with</p>
            <p>users.</p>
          </div>
          <div className='contact'>
            <h2 className='contact-title'>Contact</h2>
            <img
              src="image/ไอค่อนโทรศัพท์.png"
              alt="Phone"
              className="icon"
            />
            <p className='detail'>084-8022671</p><br />
            <img
              src="image/ไอค่อนจดหมาย.png"
              alt="Email"
              className="icon"
            />
            <p className='detail'>jakarin20020@gmail.com</p><br />
            <img
              src="image/ไอค่อนโลก.png"
              alt="Website"
              className="icon"
            />
            <p className='detail'>www.github.com/Barbecue23</p><br />
            <img
              src="image/ไอค่อนบ้าน.png"
              alt="Address"
              className="icon"
            />
            <p className='detail'>253 ม.1 ต.หินกอง อ.เมือง จ.ราชบุรี<br />
              70000 Thailand</p>
          </div>
          <div className='language'>
            <h2 className='Language-title'>LANGUAGE</h2>
            <ul>
              <li>Thai</li>
              <li>English</li>
            </ul>
          </div>
          <div className='activities'>
            <h2 className='ACTIVITIES-title'>ACTIVITIES</h2>
            <ul>
              <li>Open Innovation Camp<br />
                2022 : นวัตกรรมสร้างสรรค์<br />
                สู่ชุมชนยั่งยืน</li>
              <li>The Coding club</li>
            </ul>
          </div>
          <div className='interests'>
            <h2 className='INTERESTS-title'>INTERESTS</h2>
            <ul>
              <li>Motor sports</li>
              <li>Web application</li>
              <li>iot</li>
            </ul>
          </div>
        </div>
        <div className="container2">
          <div className='education'>
            <h2 className='EDUCATION-title'>EDUCATION</h2>

            <b className='university'>Silpakorn University</b>
            <p>Bachelor of Science COMPUTER SCIENCE</p>
            <p>2021 - now (2.40)</p>

            <b className='university'>RATCHABORIKANUKROH SCHOOL</b>
            <p>Science and math stream</p>
            <p>High School Certificate ( 2.91 )</p>
            <p>2015 - 2021</p>
          </div>
          <div className='skills'>
            <h2 className='SKILLS-title'>SKILLS</h2>
            <p>Java</p>
            <p>70%</p>
            <p>C</p>
            <p>75%</p>
            <p>Python</p>
            <p>50%</p>
            <p>PHP</p>
            <p>60%</p>
            <p>HTML</p>
            <p>60%</p>
            <p>CSS</p>
            <p>20%</p>
            <p>SQL</p>
            <p>65%</p>
            <p>Flutter</p>
            <p>65%</p>
          </div>
          <div className='studying'>
            <h2 className='STUDYING-title'>STUDYING</h2>
            <ul>
              <li>Mobile applications ( Flutter )</li>
            </ul>
          </div>
        </div>
      </body>
    </div>

  );
}

export default App;
