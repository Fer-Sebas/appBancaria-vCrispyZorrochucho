import Divider from "./Divider"

const Footer = (props) => {
    return (
        <>
            <footer>
                <Divider />
                <nav>
                    <ul>
                        {props.children}
                    </ul>
                </nav>
            </footer>
        </>
    )
} 

export default Footer