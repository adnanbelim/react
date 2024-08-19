import React from 'react'

function Card({ username, btnText = "Add Friend" }) {

    //   console.log(props.username);


    return (
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-black mt-5 bg-gray-200">

            <div className="flex flex-col items-center pb-10 m-5">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg border border-black" src="https://images.pexels.com/photos/26083604/pexels-photo-26083604/free-photo-of-red-and-black-flowers-in-a-vase.jpeg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{username}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="flex mt-4 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{btnText}</a>
                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                </div>
            </div>
        </div>

    )
}

export default Card