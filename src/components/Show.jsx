import { useContext } from "react";
import { todocontext } from "../Context/Context";

const Show = () => {
    const [tasks, settasks] = useContext(todocontext);

    const DeleteHandler = (i) => {
        let isValid = false;
        if (!tasks[i].completed) {
            isValid = confirm("Do you really Want to delete this Task ?");
        }

        if (isValid || tasks[i].completed) {
            settasks(tasks.filter((task, index) => index !== i));
        }
    };

    const CompleteTaskToggle = (i) => {
        const copyTasks = [...tasks];
        copyTasks[i].completed = !tasks[i].completed;
        settasks(copyTasks);
    };

    let tasksrender = (
        <h1 className="text-center text-orange-500 font-extrabold text-2xl">
            No pending Tasks...
        </h1>
    );
    if (tasks.length > 0) {
        tasksrender = tasks.map((task, index) => {
            return (
                <li
                    key={index}
                    className="mb-5 flex justify-between items-center border rounded-xl p-5 bg-gray-800 md:flex-row flex-col"
                >
                    <div className="flex items-center mb-3 md:mb-0">
                        <div
                            onClick={() => CompleteTaskToggle(index)}
                            className={`${
                                task.completed ? "bg-green-500" : "border"
                            } mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                        ></div>
                        <h1
                            className={`${
                                task.completed && "line-through"
                            } text-2xl font-extrabold text-yellow-100`}
                        >
                            {task.title}
                        </h1>
                    </div>
                    <div className="flex gap-3 text-2xl text-yellow-100">
                        <i className="ri-file-edit-line"></i>
                        <i
                            onClick={() => DeleteHandler(index)}
                            className="ri-delete-bin-3-line cursor-pointer"
                        ></i>
                    </div>
                </li>
            );
        });
    }
    return (
        <ul className="list-none w-[90%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto p-5 bg-gray-900 rounded-2xl">
            {tasksrender}
        </ul>
    );
};

export default Show;
