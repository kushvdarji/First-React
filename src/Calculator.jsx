import React from 'react';
import {add,sub,div,mul} from './Calc';

function Calculator()
{
    return(
        <>
        <ul className="calculator">
        <li>The Sum Of Two No. Is {add(40,4)}</li>
        <li>The Sub Of Two No. Is {sub(40,4)}</li>
        <li>The Div Of Two No. Is {div(40,3)}</li>
        <li className="multiply">The Mul Of Two No. Is {mul(40,4)}</li>
      </ul>
      </>
    );
}
export default Calculator;