import React, { useState } from 'react';
import { StyledAjusteLabel, StyledButton, StyledContainerConteudo, StyledContainerInput, StyledDivLabels, StyledForm, StyledLabelCPF, StyledLabelSenha } from './Input.Styled';

type InputProps = {
    children: React.ReactNode,
    img: string
}
 
export const CadastroCliente: React.FC <InputProps> = ({children, img}) => {
    const [cpf, setCpf] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [error, setError] = useState<string>('');
 
    const validateCPF = (cpf: string): boolean => {
        // só vai aceitar número
        const cleanedCPF = cpf.replace(/\D/g, '');
 
        // vai verifica se o cliente colocou 11 números mesmo
        return cleanedCPF.length === 11 && /^\d+$/.test(cleanedCPF);
    };
 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
 
        // vai ver se está tudo certo antes de validar
        if (!validateCPF(cpf)) {
            setError('Por favor, insira um CPF válido (11 dígitos).');
            return;
        }
 
        // fica "salvo" no console
        console.log('Cadastro realizado com sucesso!');
        console.log('CPF:', cpf);
        console.log('Senha:', senha);
 
        // vai limpar os campos depois de enviar
        setCpf('');
        setSenha('');
        setError('');  // vai limpar a mensagem de erro
    };
 
    return (
        <StyledContainerInput>
            <div style={{ backgroundImage: `url(/assets/${img})` }} />
            <StyledContainerConteudo>Cadastrar Cliente</StyledContainerConteudo>
            <StyledForm onSubmit={handleSubmit}>
                <StyledDivLabels>
                    <StyledAjusteLabel htmlFor="cpf" />
                    <StyledLabelCPF
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => {
                            setCpf(e.target.value);
                            setError(''); // vai limpar a mensagem de erro
                        }}
                        required
                        placeholder='CPF'
                    />
                </StyledDivLabels>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <StyledDivLabels>
                    <StyledAjusteLabel htmlFor="senha" />
                    <StyledLabelSenha
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        placeholder='Senha'
                    />
                </StyledDivLabels>
                <StyledAjusteLabel>
                    <StyledButton type="submit">Cadastrar</StyledButton>
                </StyledAjusteLabel>
            </StyledForm>
        </StyledContainerInput>
    );
};