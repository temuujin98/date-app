import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import emailjs from 'emailjs-com';

import coolGif from './assets/cool.gif';
import duduGif from './assets/dudu.gif';
import cryGif from './assets/cry.gif';
import cuteGif from './assets/cute.gif';
import hmmGif from './assets/hmm.gif';
import madGif from './assets/mad.gif';
import thinkGif from './assets/think.gif';
import whyGif from './assets/why.gif';
import workGif from './assets/work.gif';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [finished, setFinished] = useState(false);
  const [currentText, setCurrentText] = useState("Хоёулаа уулзах уу? 💖");
  const [noStyle, setNoStyle] = useState({});
  const [noOpacity, setNoOpacity] = useState(1);
  const [showNoButton, setShowNoButton] = useState(true);
  const [yesZIndex, setYesZIndex] = useState(10);
  const [noZIndex, setNoZIndex] = useState(10);
  const [next, setNext] = useState(false);
  
  const [selectedLocation, setSelectedLocation] = useState("");
  const [customLocation, setCustomLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Хамаагүй");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  
  const today = new Date().toISOString().split("T")[0]; // өнөөдрийн огноо yyyy-mm-dd

  const [width, height] = useWindowSize();

  const handleLocationClick = (location) => {
    if (!customLocation) {
      setSelectedLocation(location);
    }
  };

  const sendEmail = () => {
    const emails = [
      "temuujinotgonchimeg98@gmail.com",
      email,
    ];

    if (!date) {
      alert("Та уулзах өдрөө заавал сонгоно уу!");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Имэйл буруу байна!");
      return;
    }
    emails.forEach((toEmail) => {
      emailjs.send('service_9zakg21', 'template_s7enhjr', {
        location: customLocation || selectedLocation,
        date: date,
        time: time,
        title: 'Таны хуваарь',
        to_email: toEmail,
        name: 'Таны хуваарь',
      }, '0z0PKR3O0MfQKafqn')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          alert('Алдаа гарлаа');
      });
    });
  };


  const handleYesClick = () => {
    setFinished(true);
  };

  const handleNextClick = () => {
    setNext(true)
  }

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);

    switch (newCount) {
      case 0:
        break;
      case 1:
        setYesScale(1.5);
        setCurrentText("Андуурсан юм шиг байна. Ногоон өнгөтэй товчлуур шүү");
        break;
      case 2:
        setYesScale(2);
        setCurrentText("Өөө сая гар чинь халтираад үгүй дээр дарчихлаа");
        break;
      case 3:
        setYesScale(2.5);
        setCurrentText("Ногоон товчлуур харахгүй байгаа шиг байна. Томруулаад өгийдөө");
        break;
      case 4:
        setCurrentText("Улаан товчлуур хаана байгааг мэдэхгүй байна өө");
        setNoStyle({
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -5%) translateX(140px)", // Хальт цухуйна
        });
        setNoZIndex(5);
        setYesZIndex(10);
        break;
      case 5:
        setCurrentText("Би гомдлоо..");
        setNoStyle({});
        setNoOpacity(1);
        setNoZIndex(10);
        setYesZIndex(10);
        setYesScale(1);
        break;
      case 6:
        setCurrentText("Чамд дахиад нэг боломж олгоё");
        setNoOpacity(0.6);
        break;
      case 7:
        setCurrentText("Надтай зодолдмоор байгаа юм уу айн?");
        setNoOpacity(0.3);
        break;
      case 8:
        setCurrentText("Анхнаасаа чамд нэг л сонголт байсан");
        setShowNoButton(false);
        break;
      default:
        break;
    }
  };
  const currentContent = () => {
    switch (noClickCount) {
      case 0: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={cuteGif} alt="cute GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 1: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={hmmGif} alt="hmm GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 2: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={duduGif} alt="dudu GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 3: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={workGif} alt="work GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 4: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={thinkGif} alt="think GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 5: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={cryGif} alt="cry GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 6: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={madGif} alt="mad GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 7: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={whyGif} alt="why GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      case 8: return (
        <div className="h-[400px] flex flex-col items-center justify-center font-semibold mb-8 px-4">
          <div className="flex items-center justify-center w-80 h-80">
            <img src={coolGif} alt="cool GIF" />
          </div>
          <div className="text-2xl text-center mt-2 mb-10">{currentText}</div>
        </div>
      )
      default:
      break;
    }
  }

  return next ? (<>
  {
    success ? 
    <div className="h-screen w-screen flex items-center justify-center bg-pink-100 text-3xl font-bold text-center text-red-400">
      <div>Уулзах өдөр хоцорч болохгүй шүү 😘</div>
    </div>
    :<div className="h-screen w-screen p-6">
    <h1 className="text-2xl font-bold mb-6 text-center">Өдрөө товлох</h1>
    <div className="flex flex-col gap-4">

      {/* Байршил сонгох */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Байршил сонгох:</label>
        <div className="flex gap-2">
          {["Талбай", "Манай Гэр", "Хүүхдийн зуу"].map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => handleLocationClick(loc)}
              className={`flex-1 p-2 rounded-full border ${
                selectedLocation === loc ? "bg-orange-500 text-white" : "bg-white"
              } ${customLocation ? "opacity-50 pointer-events-none" : ""}`}
            >
              {loc}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Өөр газар оруулах"
          value={customLocation}
          onChange={(e) => {
            setCustomLocation(e.target.value);
            setSelectedLocation(""); // гараар бичихэд товчнууд идэвхгүй болгоно
          }}
          className="p-2 border rounded-lg"
        />
      </div>

      {/* Огноо сонгох */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Огноо сонгох:</label>
        <input
          type="date"
          min={today}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-lg"
          required
        />
      </div>

      {/* Цаг сонгох */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Уулзах цаг сонгох:</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 border rounded-lg"
          required
        >
          <option value="Хамаагүй">Хамаагүй</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
          <option value="23:00">23:00</option>
          <option value="24:00">24:00</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold">Хуваарь хүлээж авах имэйл оруулах:</label>
        <input
          type="email"
          placeholder="Таны имэйл хаяг"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-lg"
          required
        />
      </div>

      <p className="text-sm text-red-600 text-xs text-center">
        Анхаар! Амлалтаа биелүүлэхгүй бол шийтгэлтэй 😏
      </p>

      <button
        onClick={sendEmail}
        className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 mt-4"
      >
        Илгээх
      </button>
    </div>
  </div>
  }
  </>) : (
    <div className="h-screen w-screen bg-pink-100 p-4 flex flex-col items-center justify-center relative overflow-hidden">
      {finished && <Confetti width={width} height={height} />}
      {!finished ? (
        <>
            {currentContent()}
          <div className={`flex justify-center ${
                noClickCount === 0 ? 'gap-8' : 
                noClickCount === 1 ? 'gap-14' : 
                noClickCount === 2 ? 'gap-20' : 
                noClickCount === 3 ? 'gap-24' : 
                'gap-8'
              } relative`}
            >
            <button
              onClick={handleYesClick}
              style={{ transform: `scale(${yesScale})`, zIndex: yesZIndex }}
              className="bg-green-500 hover:bg-green-600 hover:shadow-2xl hover:shadow-green-400/70 text-white font-bold py-2 px-8 rounded transition-all duration-300"
              >
              Уулзая
            </button>

            {showNoButton && (
              <button
                onClick={handleNoClick}
                style={{
                  ...noStyle,
                  opacity: noOpacity,
                  zIndex: noZIndex,
                }}
                className="bg-red-500 hover:bg-red-600 hover:shadow-2xl hover:shadow-red-400/70 text-white font-bold py-2 px-8 rounded transition-all duration-300"
                >
                Үгүй
              </button>
            )}
          </div>
        </>
      ) : (
        <h1 className="text-3xl font-bold text-green-600 text-center flex flex-col items-center justify-center">
          <div>Баяр хүргэе! 🎉 Та надтай уулзах эрхээр шагнууллаа!</div>
          <button
            onClick={handleNextClick}
            className="bg-orange-500 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-400/70 text-white font-bold py-2 px-8 rounded transition-all duration-300 mt-8"
          >
            Өдрөө товлох
          </button>
        </h1>
      )}
    </div>
  );
}

export default App;
