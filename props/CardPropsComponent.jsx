import './Card.css'; // importing css here

export default function CardPropsComponent(props) {
    return (
        // replaced hard code contact card component with props
        <div className="card">
            <img
                src={props.src}
                alt={props.alt}
            />
            <h2>Name: {props.name}</h2>
            <p>phone: {props.phone}</p>
            <p>email: {props.email}</p>
        </div>
    )
}