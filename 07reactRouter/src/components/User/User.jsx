import React from "react";
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <>
            <div className="text-lg font-semibold text-blue-600 bg-blue-100 p-4 rounded-lg shadow">
                User: {userid}
            </div>

        </>
    )
}

export default User