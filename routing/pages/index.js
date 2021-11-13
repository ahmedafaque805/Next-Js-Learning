import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <h3>
                Home
                </h3>
            <Link href='/about'>
                <button>About</button>
            </Link>
            <Link href='/product'>
                <button>product</button>
            </Link>
        </div>
    )
}

export default Home
