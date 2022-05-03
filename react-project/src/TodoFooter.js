
function TodoFooter({todos,onClearCompleted}){
    
    let completed = todos.filter((todo)=> todo.isCompleted ).length;
    return (
        <div>
            <span>
                {completed}/{todos.length} Completed
            </span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}



export default TodoFooter;