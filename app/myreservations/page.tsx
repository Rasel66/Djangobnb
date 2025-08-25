import Image from "next/image";

const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My Reservations</h1>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 rounded-md shadow-sm">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                alt="Beach"
                                className="hover:scale-110 transition object-cover h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">Property Name</h2>

                        <p><strong>Check in date: </strong>25/08/2025</p>
                        <p><strong>Check out date: </strong>27/08/2025</p>
                        <p><strong>Number of nights: </strong>2</p>
                        <p><strong>Total Price: </strong>$200</p>
                        <div className="bg-airbnb mt-6 py-3 px-3 text-white cursor-pointer rounded-xl inline-block">Go To Property</div>
                    </div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-300 rounded-md shadow-sm">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                alt="Beach"
                                className="hover:scale-110 transition object-cover h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl">Property Name</h2>

                        <p><strong>Check in date: </strong>25/08/2025</p>
                        <p><strong>Check out date: </strong>27/08/2025</p>
                        <p><strong>Number of nights: </strong>2</p>
                        <p><strong>Total Price: </strong>$200</p>
                        <div className="bg-airbnb mt-6 py-3 px-3 text-white cursor-pointer rounded-xl inline-block">Go To Property</div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MyReservationsPage;