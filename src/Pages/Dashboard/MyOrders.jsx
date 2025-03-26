import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl font-bold font-serif text-center'>My Order's</h1>
            </div>
            <div className=" overflow-x-auto rounded-md">
                <table className="w-full text-sm text-left">
                    <thead className=" bg-[#F5F5F5]">
                        <tr>
                            <th className="px-6 py-4">
                                Order ID
                            </th>

                            <th className="px-6 py-4">
                                Date
                            </th>

                            <th className="px-6 py-4">
                                Status
                            </th>
                            <th className="px-6 py-4">
                                Total
                            </th> <th className="px-6 py-4">
                                Action's
                            </th>

                        </tr>
                    </thead>
                    <tbody>


                        <tr>
                            <td className="px-6 py-4">
                                web-111qast
                            </td>

                            <td className="px-6 py-4">
                                11 december, 2022
                            </td>

                            <td className="px-6 py-4">
                                Processing
                            </td>
                            <td className="px-6 py-4">
                                $125
                            </td>
                            <td className="px-6 py-4 text-success">
                                View
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                web-111qast
                            </td>

                            <td className="px-6 py-4">
                                11 december, 2022
                            </td>

                            <td className="px-6 py-4 text-scale1">
                                Completed
                            </td>
                            <td className="px-6 py-4">
                                $125
                            </td>
                            <td className="px-6 py-4 text-success">
                                View
                            </td>
                        </tr> <tr>
                            <td className="px-6 py-4">
                                web-111qast
                            </td>

                            <td className="px-6 py-4">
                                11 december, 2022
                            </td>

                            <td className="px-6 py-4 text-scale1">
                                Completed
                            </td>
                            <td className="px-6 py-4">
                                $125
                            </td>
                            <td className="px-6 py-4 text-success">
                                View
                            </td>
                        </tr> <tr>
                            <td className="px-6 py-4">
                                web-111qast
                            </td>

                            <td className="px-6 py-4">
                                11 december, 2022
                            </td>

                            <td className="px-6 py-4 text-scale1">
                                Completed
                            </td>
                            <td className="px-6 py-4">
                                $125
                            </td>
                            <td className="px-6 py-4 text-success">
                                View
                            </td>
                        </tr>




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;