import { useState } from "react";

import { CardBtn } from "src/components/card/cardBtn";
import InputDefault from "src/components/input/inputDefault";
import { InputText } from "src/components/input/inputText";
import { Layout } from "src/components/layout/layout";
import styles from "../styles/Home.module.css";
import ImgButton, { DisplayedImage } from "src/components/button/ImgButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SendCard } from "src/components/card/sendCard";

const server = "http://localhost:8000/xxxxxxxx";

const DataPost = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [personName, setPersonName] = useState<string[]>([]);
  const [displayedImages, setDisplayedImages] = useState<DisplayedImage[]>([]);

  const handleSendClick = async () => {
    // onClick時にPython（PostgreSQL）にデータを送信し、データを登録する
  };

  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main2}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ maxWidth: "500px", width: "100%" }}>
              <InputDefault
                personName={personName}
                setPersonName={setPersonName}
              />

              <InputText
                text={text}
                text2={text2}
                setText={setText}
                setText2={setText2}
              />

              <div>
                <button onClick={handleSendClick} className="sendBtn">
                  <FontAwesomeIcon
                    style={{ width: "50px" }}
                    icon={faEnvelope}
                  />
                  送信
                </button>
              </div>
            </div>

            <div style={{ maxWidth: "500px", width: "100%" }}>
              <ImgButton
                displayedImages={displayedImages}
                setDisplayedImages={setDisplayedImages}
              />
            </div>
          </div>

          <div></div>

          <div>
            <SendCard />
          </div>
          {/* <CardBtn /> */}
        </main>
      </Layout>
    </div>
  );
};

export default DataPost;

// 複数選択
// https://www.happylifecreators.com/blog/20220218/
