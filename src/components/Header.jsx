import { useContext } from "react";
import { todocontext } from "../Context/Context";

const Header = () => {
    const [tasks] = useContext(todocontext);

    return (
        <div className="mt-10 w-[90%] md:w-[70%] lg:w-[50%] xl:w-[35%] h-auto md:h-[30vh] border rounded-3xl flex flex-col md:flex-row justify-around items-center p-5 md:p-10 mx-auto">
            <div className="text-yellow-100 mb-5 md:mb-0 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold">LETS TODO</h1>
                <p>Keeps doing things</p>
            </div>
            <div className="text-2xl md:text-3xl font-extrabold flex justify-center items-center w-[10vmax] h-[10vmax] rounded-full bg-orange-600">
                {tasks.filter((t) => t.completed === true).length}/
                {tasks.length}
            </div>
        </div>
    );
};

export default Header;
