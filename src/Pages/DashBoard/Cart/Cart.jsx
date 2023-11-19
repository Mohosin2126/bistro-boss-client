import useCart from "../../../hooks/useCart";

const Cart = () => {
    const [cart] = useCart();
    console.log(cart)
    return (
        <div>
        <div className="flex justify-evenly mb-8">
            <h2 className="text-4xl">Items: {cart.length}</h2>
            <h2 className="text-4xl">Total Price</h2>
            <button className="btn btn-primary">Pay</button>

        </div>
        <div className="overflow-x-auto">
            <table className="table  w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>${item.price}</td>
                            <th>
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Cart;