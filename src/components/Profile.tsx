export function Profile(){
    return (
        <div>
            <img src="src\assets\my-photo-profile.jpeg" alt="Marcelo Santos" />
            <h3>Marcelo Santos</h3>
            <p>Engenheiro de Software</p>
        </div>
    )
}

export function Job(){
    return(
        <p>Atualmente não estou empregado.</p>
    )
}

const JobFC: React.FC = () => {
    return(
        <p>Atualmente não estou empregado (Function Component).</p>
    )
}

export default JobFC;