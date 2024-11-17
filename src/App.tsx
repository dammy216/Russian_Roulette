import { useState } from "react";
import "./App.css";
import DisplayAmount from "./components/DisplayAmount";

function App() {
  const [liveAmount, setLiveAmount] = useState<number>(0);
  const [emptyAmount, setEmptyAmount] = useState<number>(0);

  //実弾を減らす
  const handleDecrementLiveAmountClick = () => {
    if (liveAmount > 0) {
      setLiveAmount((value) => value - 1);
    }
  };

  //空砲を減らす
  const handleDecrementEmptyAmountClick = () => {
    if (emptyAmount > 0) {
      setEmptyAmount((value) => value - 1);
    }
  };
  //実包と空砲を反転する
  const handleReverseClick = () => {
    setLiveAmount(emptyAmount);
    setEmptyAmount(liveAmount);
  };

  //初期化ボタン
  const handleResetClick = () => {
    setLiveAmount(0);
    setEmptyAmount(0);
  };

  return (
    <div className="main">
      <h1>BackShot Roulette</h1>
      <div className="amountManager">
        <DisplayAmount
          liveAmount={liveAmount}
          emptyAmount={emptyAmount}
          setLiveAmount={setLiveAmount}
          setEmptyAmount={setEmptyAmount}
        />
        <div className="amountOperationButtons">
          <button
            className="decrementLiveAmount"
            onClick={handleDecrementLiveAmountClick}
          >
            実弾を減らす
          </button>
          <button
            className="decrementEmptyAmount"
            onClick={handleDecrementEmptyAmountClick}
          >
            空砲を減らす
          </button>
        </div>
      </div>
      <button className="reverseButton" onClick={handleReverseClick}>
        弾反転
      </button>
      <button className="resetButton" onClick={handleResetClick}>
        リセット
      </button>
    </div>
  );
}

export default App;
