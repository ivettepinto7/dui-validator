import { render, waitFor , screen, getRoles } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).not.toThrow;
  });

  it('should have title "¿Mi DUI es valido?"', () => {
    const { getByText } = render(<App />);
    expect(getByText(/¿Mi dui es valido/i)).toBeInTheDocument();
  });

  it('should have an input text', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId(/dui-input/i);
    expect(input).toBeInTheDocument();
  });

  it('should have a button with text "Validar"', () => {
    const { getByRole } = render(<App />);
    const boton = getByRole('button', {
      name: /validar/i
    });
    expect(boton).toBeInTheDocument();
  });

  it('should be a invalid dui', async () => {
    const { findByText, getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText(/000000000/i);
    await waitFor(() => userEvent.type(input,'12345'));
    const boton = getByText(/Validar/i);
    await waitFor(() => userEvent.click(boton));
    const validez = findByText("DUI INVALIDO");
    expect(await validez).toBeInTheDocument();
  });
  
  it('should be a valid dui', async () => {
    const { findByText, getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText(/000000000/i);
    await waitFor(() => userEvent.type(input,'023827235'));
    const boton = getByText(/Validar/i);
    await waitFor(() => userEvent.click(boton));
    const validez = findByText("DUI VALIDO");
    expect(await validez).toBeInTheDocument();
  });

})