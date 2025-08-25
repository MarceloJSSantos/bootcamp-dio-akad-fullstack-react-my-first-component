import { HardSkills } from "./HardSkills"
import { SoftSkills } from "./SoftSkills"

export function Skills(){
    return(
        <> {
            /*Como no <Fragment>, utilizado no lugar da <div> quando não houver necessidade de estilização*/
           }
            <h3>Hard Skills:</h3>
            <HardSkills />
            <h3>Soft Skills:</h3>
            <SoftSkills />
        </>
    )
}