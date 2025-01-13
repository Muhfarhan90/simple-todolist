/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function addTodo() {
    if (todo !== "") {
      const updateTodos = [...todos, todo];
      setTodos(updateTodos);
      localStorage.setItem("todos", JSON.stringify(updateTodos));
    }
  }

  function deleteTodo(index) {
    const updateTodos = todos.filter((_, i) => i !== index);
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }
  // Load tugas dari localstorage saat aplikasi dimulai
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <div className="max-w-[768px] mx-auto border-2 border-pink-500 h-screen px-4 sm:px-16 py-8 bg-pink-300 flex flex-col items-center">
      <div>
        <h1 className="text-4xl font-bold mb-8">Simple Todo List</h1>
      </div>
      <div className="mb-8 flex flex-wrap gap-8">
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
              setTodo("");
            }
          }}
          placeholder="tambahkan todo"
          className="border-2 border-black py-2 px-4 rounded-lg"
        />
        <button
          onClick={addTodo}
          className="bg-green-400 py-2 px-6 rounded-lg hover:bg-green-500 font-semibold border-2 border-black"
        >
          Tambah
        </button>
      </div>

      <ul className="bg-blue-400 text-white p-8 rounded-lg flex flex-col gap-4 w-full">
        {todos.length === 0 ? (
          <li className="text-xl font-semibold p-4 bg-purple-600 rounded-lg">
            Belum ada tugas yang ditambahkan
          </li>
        ) : (
          todos.map((t, index) => {
            return (
              <li
                key={index}
                className="text-lg sm:text-xl font-semibold p-4 bg-purple-600 rounded-lg flex items-center justify-between"
              >
                <span>{t}</span>
                <button
                  onClick={() => {
                    deleteTodo(index);
                  }}
                  className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg"
                >
                  Hapus
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
