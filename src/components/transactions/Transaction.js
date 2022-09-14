import EditImg from '../../assets/images/edit.svg';
import DelteImg from '../../assets/images/delete.svg';

const Transaction = ({ transaction }) => {
  return (
    <li className={`transaction ${transaction.type}`}>
      <p>{transaction.name}</p>
      <div className="right">
        <p>৳ {transaction.amount}</p>
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
