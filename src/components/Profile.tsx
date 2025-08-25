export function Profile(){
    return (
        <div>
            <img src="src\assets\my-photo-profile.jpeg"
             alt="Marcelo Santos"
             width="300px" />
            <h3>Marcelo Santos</h3>
            <p><b>Último/Atual cargo: </b>Engenheiro de Software</p>
        </div>
    )
}

export function Job(){
    return(
        <p>Atualmente não estou empregado. Mas minha última colocação foi na NTT Data.</p>
    )
}

const JobFC: React.FC = () => {
    return(
        <p>Estou atualmente apredendo React para atuação no Front End. <b>(Function Component)</b></p>
    )
}

export default JobFC;