const employeeList = [
    {
        "productname": "rice",
        "quantity": "1",
        "price": "100",
        "amount": "100"
    },
    {
        "productname": "salt",
        "quantity": "1",
        "price": "10",
        "amount": "10"
    },
    {
        "productname": "salt",
        "quantity": "1",
        "price": "10",
        "amount": "10"
    }
]
let values = 0;

employeeList.map(x => {
    return values += parseInt(x.amount);;
})


const ProductBilling = () => {

    return (<div style={{ "width": "800px" }}>
        <table>
            <thead>
                <tr>
                    <td>Product Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                {employeeList.map((val) => (
                    <tr>
                        <td>{val.productname}</td>
                        <td>{val.quantity}</td>
                        <td>{val.price}</td>
                        <td>{val.amount}</td>
                        <td><button >Edit</button></td>
                        <td><button >Delete</button></td>
                    </tr>

                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Sub total : {values}</td>
                </tr>
            </tfoot>
        </table>
    </div >);
}



export default ProductBilling;