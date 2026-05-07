interface Props {
    titulo: string;
    descripcion?: string;
}

const CustomHeader = ({titulo, descripcion}:Props) => {
    return (
        <div className="content-center" >
            <h1>{titulo}</h1>
            {descripcion && <p>{descripcion}</p>}
        </div>
    )
}

export default CustomHeader

