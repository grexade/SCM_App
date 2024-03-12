import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('maria');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
       //history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Demand</h2>
      <form onSubmit={handleSubmit}>
        <label>Demand title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Demand details:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Name:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="maria">maria</option>
          <option value="yoshi">yoshi</option>
          <option value="gabriel">gabriel</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}
 
export default Create;