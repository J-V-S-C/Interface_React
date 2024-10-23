import Header from "../../components/header"
import { DivMain, InputEdited, DivLogin} from "./style"

export default function Login(){


    return (
        <>
            <Header/>
            <DivMain>
                <DivLogin>
                    <InputEdited type="email" placeholder="E-mail"></InputEdited>
                </DivLogin>
            </DivMain>

        </>
    )
}