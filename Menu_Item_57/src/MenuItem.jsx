/* eslint-disable react/prop-types */
const MenuItem = ({ name, price, description }) => {
    return (
        <div className="border p-4">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-600">${price}</p>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default MenuItem;
