import { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

function Form({ data, setData, updateDataApi, setUpdateDataApi }) {

    const [addData, setAddData] = useState({
        title: "",
        body: "",

    });

    let isEmpty = Object.keys(updateDataApi).length === 0;

    // get the updated data and add into input field

    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || "",
        });
    }, [updateDataApi]);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const addPostData = async () => {
        const res = await postData(addData);
        if ((res.status = 200)) {
            setData([...data, res.data])
            setAddData({ title: "", body: "" });

        }
    };

    // updatePostData 
    const updatePostData = async () => {
        try {
            const res = await updateData(updateDataApi.id, addData);
            console.log(res)
            
            if(res.status === 200) {
                setData((prev) => {
                    console.log(prev)
                return prev.map((curElem) => {
                    return curElem.id === res.data.id ? res.data : curElem;
                })
            });
             setAddData({ title: "", body: "" });
             setUpdateDataApi({});
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleFormSubbmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;

        if (action === "Add") {
            addPostData();
        } else {
            updatePostData()
        }
    };

    return (
        <div className=" bg-gray-800">
            <div className="bg-gray-700 px-6 py-4 shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4">
                        <form onSubmit={handleFormSubbmit}>
                            <input
                                type="text"
                                autoComplete="off"
                                id="title"
                                name="title"
                                placeholder="Add Title"
                                value={addData.title}
                                onChange={handleInputChange}
                                className="flex-1 px-4 py-3 bg-white border-0 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />

                            <input
                                type="text"
                                autoComplete="off"
                                id="body"
                                name="body"
                                placeholder="Add Post"
                                value={addData.body}
                                onChange={handleInputChange}
                                className="flex-1 px-4 py-3 bg-white border-0 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                            />

                            <button
                                type="submit"
                                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                                value={isEmpty ? "Add" : "Edit"}
                            >
                                {isEmpty ? "Add" : "Edit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Form;