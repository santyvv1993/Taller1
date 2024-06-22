import App from "./App";
import { render , fireEvent, screen} from '@testing-library/react';
import faker from 'faker';
jest.mock('faker');

//prueba de renderizado de componente
test('renders App component', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });


//prueba de incremento de contador
test('incrementa el contador en 1 al hacer clic en el botón Contador', () => {
    render(<App />);
    const contadorButton = screen.getByRole('button', { name: /count is/i });
  
    // Bucle para simular 10 clics en el botón "Contador"
    for (let i = 0; i < 10; i++) {
      fireEvent.click(contadorButton);
    }
  
    // Verifica que el texto del botón se haya actualizado para reflejar el incremento del contador
    // Por ejemplo, si el contador inicial es 0, después del clic debería ser 1
    expect(contadorButton).toHaveTextContent('count is 10');
  });

//prueba de generación de nombre aleatorio
  describe('App component tests', () => {
    test('initial states are set correctly', () => {
      render(<App />);
      expect(screen.getByText('count is 0')).toBeInTheDocument();
      expect(screen.getByText('Santiago')).toBeInTheDocument();
      // Verificar que el div de output está vacío inicialmente podría requerir acceder al DOM directamente, ya que no tiene texto visible.
    });
  
    test('generates and displays a random name', () => {
      const fakeName = 'John Doe';
      faker.name.findName.mockReturnValue(fakeName);
      render(<App />);
      fireEvent.click(screen.getByText('Aleatorio'));
      expect(screen.getByText(fakeName)).toBeInTheDocument();
    });
  
    test('updates name from input', () => {
      render(<App />);
      const input = screen.getByLabelText('Nombre:');
      fireEvent.change(input, { target: { value: 'Jane Doe' } });
      expect(screen.getByDisplayValue('Jane Doe')).toBeInTheDocument();
    });
  
    test('sanitizes input to prevent XSS attacks', async () => {
      // Renderiza el componente App
      render(<App />);
    
      // Simula la entrada de un script malicioso como nombre
      const maliciousScript = "<script>alert('hack')</script>";
      const nameInput = screen.getByLabelText(/nombre/i); // Asume que hay un input para el nombre con una etiqueta asociada
      fireEvent.change(nameInput, { target: { value: maliciousScript } });
    
      // Simula el envío del formulario o la acción que desencadena la sanitización
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      fireEvent.click(submitButton);
    
      // Espera a que el contenido se actualice en el DOM
      const outputElement = await screen.findByTestId('output');
    
      // Verifica que el contenido sanitizado (y no el script malicioso) se muestra en el DOM
      expect(outputElement.innerHTML).not.toContain(maliciousScript);
      // Además, puedes verificar que el contenido sanitizado no incluye el script de ninguna forma
    });
  
    test('increments count', () => {
      render(<App />);
      fireEvent.click(screen.getByText('count is 0'));
      expect(screen.getByText('count is 1')).toBeInTheDocument();
    });
  });