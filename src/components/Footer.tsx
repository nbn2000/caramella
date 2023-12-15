import Facebook from "@/svg/Facebook"
import { Instagram, Logo, Telegram } from "@/svg/view"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="min-h-[350px] bg-orange text-[#F0F0F0] flex flex-row">
            <Link href='/'><Logo fnlcolorlogo='#F0F0F0' middlecolor="#F0F0F0" /></Link>
            <div >
                <Link href='/' className='l-1125 !font-bold'>Home</Link>
                <Link href='/about' className='l-1125 !font-bold'>About</Link>
                <Link href='/menu' className='l-1125 !font-bold'>Menu</Link>
            </div>
            <div>
                <Link href='/careers' className='l-1125 !font-bold'>Careers</Link>
                <Link href='/order' className='l-1125 !font-bold'>Order</Link>
                <Link href='/contact' className='l-1125 !font-bold'>Contact</Link>
            </div>
            <div className="flex flex-row justify-center items-center gap-8">
                <Link href='/' ><Instagram /></Link>
                <Link href='/'><Telegram /></Link>
                <Link href='/'><Facebook /></Link>
            </div>
        </footer>
    )
}

export default Footer