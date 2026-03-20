import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();
    return <div className="flex justify-center">
        <div className="pt-8 max-w-Screen-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex justify-center">
                    <img src={"/ChessBoard.jpeg"}
                        alt="Chess Board"
                        className="max-w-96"/>
                </div>
                <div className="pt-10">

                    <h1 className="text-4xl font-bold mb-4 text-white">Play Chess Online on the #2 Site!</h1>
                    <div className="mt-4 flex justify-center">
                        <button 
                        onClick={() => navigate("/game")}
                        className="px-8 py-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Play Online
                        </button>

                    </div>
                </div>
            </div>
        
        </div>
    </div>
}