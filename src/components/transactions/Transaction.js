import EditImg from '../../assets/images/edit.svg';
import DelteImg from '../../assets/images/delete.svg';

const Transaction = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
        <button className="link">
          <img className="icon" src={EditImg} alt="edit" />
        </button>
        <button className="link">
          <img className="icon" src={DelteImg} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
