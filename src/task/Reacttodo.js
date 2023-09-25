// import React,{useState} from "react";


// function TodoList() {
//     const [name, setname] = useState([]);
//     const [result, setresult] = useState('');

//     const addTodo = () => {
//         if (result.trim() === '') return;

//         const resultItem = {
//             id: Date.now(),
//             text: result,
//         };

//         setname([...name, resultItem]);
//         setresult('');
//     };

//     const removeTodo = (id) => {
//         const update = name.filter((todo) => todo.id !== id);
//         setname(update);
//     };

//     return (
//         <div>
//             <h2>Todo List</h2>
//             <div>
//                 <input type="text" value={result} onChange={(e) => setresult(e.target.value)} />
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//             <ul>
// {name.map((todo)=>{
//     <li key={todo.id}>
//     {todo.text}
//     <button onClick={()=>removeTodo(todo.id)}>remove</button></li>
// })}
// </ul>
// </div>
//     );
// }
// export default TodoList;