import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../components/ContactForm.js";
import { act } from "react-dom/test-utils";

test('firstname input', () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const firstNameValue = 'Eddie'
    
    fireEvent.change(firstNameInput, { target: {value: firstNameValue}});
    
    expect(firstNameInput).toHaveValue(firstNameValue);

});

test('lastName input', () => {
    render(<ContactForm />);

    const lastNameInput = screen.getByLabelText(/last name/i)
    const lastNameValue = 'Burke'

    fireEvent.change(lastNameInput, { target: {value: lastNameValue}})

    expect(lastNameInput).toHaveValue(lastNameValue)
});

test('email input', () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i)
    const emailValue = 'example@example.com'

    fireEvent.change(emailInput, { target: {value: emailValue}})

    expect(emailInput).toHaveValue(emailValue)
});

test('message input', () => {
    render(<ContactForm />);

    const messageInput = screen.getByLabelText(/message/i)
    const messageValue = 'Do not worry, this is just a test'

    fireEvent.change(messageInput, { target: {value: messageValue}})

    expect(messageInput).toHaveValue(messageValue)
});

