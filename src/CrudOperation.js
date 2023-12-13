import React, { useState } from 'react';

const CrudOperation = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleDelete = (index) => {
    const filteredData = tableData.filter((item, i) => i !== index);
    setTableData(filteredData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editClick) {
      const tempTableData = [...tableData];
      tempTableData[editIndex] = { ...inputs };
      setTableData(tempTableData);
      setEditClick(false);
      setEditIndex(null);
    } else {
      setTableData([...tableData, { ...inputs }]);
    }
    setInputs ({
      name: "",
      email: "",
    });
  };

  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({
      name: tempData.name,
      email: tempData.email,
    });
    setEditClick(true);
    setEditIndex(index);
  };

  return (
    <div className='md:container md:mx-auto border-green-600'>
      <form onSubmit={handleSubmit}>
        <h1 className='sm'>CrudApp</h1>
        <label>Name</label>
        <div>
          <input name='name' value={inputs.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input name='email' value={inputs.email} onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>{editClick ? "Update" : "Add"}</button>
        </div>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                    <button onClick={() => handleEdit(i)}>Edit</button>
                   <button onClick={() => handleDelete(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudOperation;
