import { useRouter } from 'next/router'

const productdetails = () => {
    const Router = useRouter()
    const ProductId = Router.query.productId
    return (
        <div>
            <h3>Product Detail of {ProductId}</h3>
        </div>
    )
}

export default productdetails
