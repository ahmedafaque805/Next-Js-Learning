import Link from 'next/link'

const Product = () => {
    return (
        <div>
            <Link href='product/1'>
            <h4>Product 1</h4>
            </Link>
            <Link href='product/2'>
            <h4>Product 2</h4>
            </Link>
            <Link href='product/3' replace>
            <h4>Product 3</h4>
            </Link>
            <Link href='product/4'>
            <h4>Product 4</h4>
            </Link>
        </div>
    )
}

export default Product
