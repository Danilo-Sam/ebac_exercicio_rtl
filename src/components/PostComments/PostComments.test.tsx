import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('deve adicionar comentario', () =>{
        render(<Post />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'eu simplesmente adorei essa miniatura'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('eu simplesmente adorei essa miniatura')).toBeInTheDocument()
    });

    test('deve adicionar outro comentario', () =>{
        render(<Post />)
        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'onde eu consigo compra um desse, é lindo'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('onde eu consigo compra um desse, é lindo')).toBeInTheDocument()
    });
});