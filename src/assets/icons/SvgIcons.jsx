import React from 'react'

const SvgIcons = ({ id }) => {
    switch (id) {
        case 'photo':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white" />
                    <path d="M20 4H16.83L15.59 2.65C15.22 2.24 14.68 2 14.12 2H9.88C9.32 2 8.78 2.24 8.4 2.65L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="white" />
                </svg>
            )
            break;
        case 'send':
            return (
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 17.4L18.85 9.91999C19.66 9.56999 19.66 8.42999 18.85 8.07999L1.4 0.599986C0.74 0.309986 0.00999999 0.799987 0.00999999 1.50999L0 6.11999C0 6.61999 0.37 7.04999 0.87 7.10999L15 8.99999L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z" fill="white" />
                </svg>
            )
            break;
        default:
            return undefined;
            break;
    }
}

export default SvgIcons;