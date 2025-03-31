import  { useState } from 'react';

const BillingDetails = () => {
 
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [address, setAddress] = useState("")
    const [addressLine, setAddressLine] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [zip, setZip] = useState("")
    const [email, setEmail] = useState("")
    const billing = { firstName, lastName, address, addressLine, city, phone, zip, email }
console.log(billing)

    return (
        <div className='lg:w-1/2 px-5'>
            <h1 className='heading-4 text-textHeading mb-4'>Billing Details</h1>
            <form className='px-4' >
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input onChange={() => setFirstName()} value={firstName} type="text" placeholder='First name*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                    <div className='py-1'>
                        <input onChange={() => setlastName()} value={lastName} type="text" placeholder='Last name*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                </div>
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input onChange={() => setPhone()} value={phone} type="text" placeholder='Phone*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                    <div className='py-1'>
                        <input onChange={() => setEmail()} value={email} type="email" placeholder='Email*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                </div>
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input onChange={() => setAddress()} value={address} type="text" placeholder='Address*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                    <div className='py-1'>
                        <input onChange={() => setAddressLine()} value={addressLine} placeholder='Address Line*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                </div>
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input onChange={() => setZip()} value={zip} type="text" placeholder='City / Town*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                    <div className='py-1'>
                        <input onChange={() => setCity()} value={city} type="text" placeholder='City / Town*' className='w-full pl-4 p-7 rounded-lg h-9 border' required />
                    </div>
                </div>
                <div>
                    <div className='text-medium  mt-10'>

                        <h1 className='heading-4 mb-5'>Payment</h1>


                        <input type="radio" id="bank" name="payment" value="bank" />
                        <label className='pl-4' for="bank">Direct Bank Transfer</label><br />

                        <input type="radio" id="cash" name="payment" value="cash" />
                        <label className='pl-4' for="cash">Cash on delivery</label><br />

                        <input className='bg-success btn-hover text-white px-12 py-4 heading-6 rounded-lg mt-10 hover:bg-brandColor2 ease-in duration-300 ' type="submit" value="Place an order" />

                    </div>

                </div>
            </form>

        </div>
    );
};

export default BillingDetails;