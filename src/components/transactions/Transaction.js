import EditImg from '../../assets/images/edit.svg';
import DelteImg from '../../assets/images/delete.svg';
import { useDispatch } from 'react-redux';
import { editActive } from '../../features/transaction/transactionSlice';

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  return (
    <li className={`transaction ${transaction.type}`}>
      <p>{transaction.name}</p>
      <div className="right">
        <p>৳ {transaction.amount}</p>
        <button className="link" onClick={handleEdit}>
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
