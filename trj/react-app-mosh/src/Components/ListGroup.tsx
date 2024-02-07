const ListGroup = () => {
  let items = ["New York", "San Francisco", "Paris", "Brazil", "Tokyo"];
  
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 ? <h3>No item found</h3> : null}
        {items.length === 0 && <h3>No item found</h3>}
        {items.map((item, i) => (
          <li key={i} className="list-group-item" onClick={() => console.log(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
