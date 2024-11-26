import "../styles/displayAmount.css";

type Props = {
  liveAmount: number;
  emptyAmount: number;
  setLiveAmount: (amount: number) => void;
  setEmptyAmount: (amount: number) => void;
};

const DisplayAmount = (props: Props) => {
  return (
    <div>
      <div className="displayContainer">
        <div className="liveBullets">
          <label htmlFor="">実包：</label>
          <select
            name="実包"
            value={props.liveAmount}
            onChange={(e) => props.setLiveAmount(Number(e.target.value))}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className="emptyBullets">
          <label htmlFor="">空砲：</label>
          <select
            name="空砲"
            value={props.emptyAmount}
            onChange={(e) => props.setEmptyAmount(Number(e.target.value))}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DisplayAmount;
