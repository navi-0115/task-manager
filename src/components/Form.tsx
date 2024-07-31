import { SetStateAction, useState } from "react";

export function Form() {
  const [title, setTitle] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const submittedTitle = title;
    console.log(submittedTitle);

    setTitle("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Task Title:
            <input
              style={{ margin: 20 }}
              type="text"
              value={title}
              onChange={handleChange}
              placeholder="Type your tasks here..."
            />
          </label>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
