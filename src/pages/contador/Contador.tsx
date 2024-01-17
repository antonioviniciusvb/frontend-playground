import { useState } from "react";

function Contador() {

    const [valor, setValor] = useState(0);

    function handleClick() {
        setValor(valor + 1);
        console.log(valor);
    }

    return (
        <>

            <h2>Contador</h2>
            <p>O valor do contador é: {valor}</p>
            <button onClick={handleClick}>Incrementar</button>

        </>

    );

}

export default Contador