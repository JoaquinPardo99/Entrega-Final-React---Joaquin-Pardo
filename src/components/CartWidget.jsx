import cart from '../assets/bag.jpg'

export const CartWidget = () => {
    return(
    <>
    <img src={cart} height={24}/>
    <span>4</span>
    </>
    );
}