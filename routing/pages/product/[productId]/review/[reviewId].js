import { useRouter } from 'next/router'

const productdetails = () => {
    const Router = useRouter()
    const {productId , reviewId} = Router.query
    return (
        <div>
            <h3>Review {reviewId} for Product {productId}</h3>
        </div>
    )
}

export default productdetails
