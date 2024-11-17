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

  //実包確立計算
  const calcProbability = () => {
    const totalAmount: number = liveAmount + emptyAmount;
    return totalAmount === 0 ? 0 : Math.round((liveAmount / totalAmount) * 100);
  };

  return (
    <div className="main">
      <header>
        <h1>BackShot Roulette</h1>
      </header>
      <div className="amountManager">
        <label className="calcProbability">
          実包の確立：{calcProbability()}%
        </label>
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
            実包を減らす
          </button>
          <button
            className="decrementEmptyAmount"
            onClick={handleDecrementEmptyAmountClick}
          >
            空包を減らす
          </button>
        </div>
        <button className="reverseButton" onClick={handleReverseClick}>
          弾反転
        </button>
        <button className="resetButton" onClick={handleResetClick}>
          リセット
        </button>
      </div>
    </div>
  );
}

export default App;
