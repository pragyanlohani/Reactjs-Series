import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleChecked, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleChecked(item.id)}
        checked={item.checked}
      />

      <label
        onDoubleClick={() => handleChecked(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>

      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
      />
    </li>
  );
};

export default LineItem;
