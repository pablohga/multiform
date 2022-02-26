import { Theme } from '../../components/Theme';
import * as C from './styles';

export const FormStep1 = () => {
  const handleNextStep = () => {};
  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label>
          Seu nome Completo
          <input type="text" autoFocus />
        </label>

        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};
