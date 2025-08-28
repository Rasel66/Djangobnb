'use client'
interface MenuLinkProps {
    label: string;
    onClick: ()=> void;
}

const MenuLink: React.FC<MenuLinkProps> = ({label, onClick}) => {
    return (
        <div
            onClick={(onClick)}
            className="cursor-pointer px-5 py-3 hover:bg-gray-200 transition"
        >
            {label}
        </div>
    )
}
export default MenuLink;