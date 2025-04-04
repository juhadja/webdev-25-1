import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"

export default function TaskListItem({ taskName, idx, onRemove, ultimo }) {

    const[ done, setDone ] = useState([true])

    function clickRemove(){
        console.log("remover item",idx)
        onRemove(idx)
    }
    function doneClick(){
        console.log("done")
        setDone(!done)

    }

    return (
        <>
            <div className="bg-gray-200 p-2 rounded my-1 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>
                        {idx > 0 &&
                            <div>
                                <Icon icon="mdi:triangle" />
                            </div>
                        }
                        {!ultimo &&
                            <div>
                                <Icon icon="mdi:triangle-down" />
                            </div>
                        }
                        
                    </div>
                    <div>
                        { taskName }
                    </div>
                </div>
                <div className="flex items-center gap-2">
                <div onClick={clickRemove} className="border  rounded-2xl px-1.5 pt-1 bg-gray-800 text-white">
                        <Icon icon="mdi:edit" />
                    </div>
                    <div onClick={clickRemove} className="border  rounded-2xl px-1.5 pt-1 bg-red-800 text-white">
                        <Icon icon="mdi:delete" />
                    </div>

                    {
                        done &&
                        <div onClick={doneClick} className="border rounded-2xl px-1.5 pt-1 bg-green-800 text-white">
                            <Icon icon="mdi:check" />
                        </div>
                    }
                    {
                        !done &&
                        <div onClick={doneClick} className="border rounded-2xl px-1.5 pt-1 text-black">
                            <Icon icon="mdi:check" />
                        </div>
                    }
                    
                </div>
            </div>
        </>
    )
}