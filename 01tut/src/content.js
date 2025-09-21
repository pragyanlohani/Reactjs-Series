import ItemList from "./ItemList";

const Content = ({ items, handleChecked, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ margin: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
