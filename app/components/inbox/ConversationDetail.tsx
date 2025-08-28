'use client';

import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">Jhon Doe</p>
                    <p>hello</p>
                </div>
                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">Deiry Halk</p>
                    <p>hello</p>
                </div>
            </div>

            <div className="border mt-4 py-4 px-6 flex border-gray-300 rounded-xl space-x-4">
                <input 
                    type="text" 
                    placeholder="Type your message...."
                    className="w-full bg-gray-200 p-2 rounded-xl"
                />
                <CustomButton
                    label = 'Send'
                    onClick={()=> console.log("clicked")}
                    className="max-w-[100px]"

                />
            </div>
        </>
    )
}
export default ConversationDetail;