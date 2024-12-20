const Modal = ({ cartItems, totalCartPrice, closeModal, totalQuantity }) => {
  // Map of color hex codes to color names
  const colorNames = {
    "#816BFF": "Purple",
    "#1FCEC9": "Teal",
    "#4B97D3": "Blue",
    "#3B4747": "Charcoal",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-[650px] shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-start">Your Cart</h2>

        <table className="w-full text-sm border-collapse mb-6">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Item</th>
              <th className="py-2 text-left text-gray-400">Color</th>
              <th className="py-2 text-left text-gray-400">Size</th>
              <th className="py-2 text-center text-gray-400">Quantity</th>
              <th className="py-2 text-right text-gray-400">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="py-2">
                  <div className="flex gap-2 items-center">
                    <img className="h-12 w-12" src={item.image} alt="" />
                    <span className="text-sm">{item.title}</span>
                  </div>
                </td>
                <td className="py-2">{colorNames[item.color] || item.color}</td>
                <td className="py-2">{item.size}</td>
                <td className="py-2 text-center">{item.quantity}</td>
                <td className="py-2 text-right">${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mb-6">
          <span className="font-bold">Total Price:</span>
          <div>
            <span className="font-bold text-lg mr-9">{totalQuantity}</span>
            <span className="font-bold text-lg">
              ${totalCartPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 bg-white text-black rounded font-medium"
          >
            Continue Shopping
          </button>
          <button
            onClick={closeModal}
            className="w-[94px] h-[36px] text-center bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
