import React, { useState } from "react";

// A custom component that renders a card with a title, content, and a button
function Card({ title, content, data }) {
  // A state variable that controls whether the data is shown or hidden
  const [showData, setShowData] = useState(false);

  // A function that toggles the showData state
  const handleToggle = () => {
    setShowData((prev) => !prev);
  };

  return (
    <div className="card">
        <div className="image">  <img  className="image"src="https://1.bp.blogspot.com/-YCQs2OPyIgI/X_wBo2gQXKI/AAAAAAAAA-k/lZfGmzrLXMsZ4PZrFEbWqOpuZxuCEro_ACLcBGAsYHQ/s749/WhatsApp%2BImage%2B2021-01-10%2Bat%2B7.26.24%2BPM.jpeg"/></div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button className="btn"onClick={handleToggle}>
        {showData ? "Hide Details" : "Show Details"}
      </button>
      {showData && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Batch</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.gender}</td>
                <td>{row.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// A sample data array that contains some information
const sampleData = [
  { name: "Alice", age: 25, gender: "Female" ,batch:"Morning"},
  { name: "Bob", age: 30, gender: "Male", batch:"Evening"},
  { name: "Charlie", age: 28, gender: "Male",batch:"Afternoon" },
];

// The main component that renders the card component with some props
function App() {
  return (
    <div className="App">
      <Card
        title="Students Details"
        content="This s tha details of Student who is register for DSA Course."
        data={sampleData}
      />
    </div>
  );
}

export default App;
