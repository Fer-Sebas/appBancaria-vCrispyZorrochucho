import React from 'react'

class IconDelete extends React.Component {
    render() {
        return (
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00004 12H9.00004V2.66667H1.00004V12ZM9.66671 0.666667H7.33337L6.66671 0H3.33337L2.66671 0.666667H0.333374V2H9.66671V0.666667Z" fill="#FFFFFE"/>
            </svg>
        )
    }
}

class IconCheck extends React.Component {
    render() {
        return (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.00006 7.79994L1.20006 4.99994L0.266724 5.93328L4.00006 9.66661L12.0001 1.66661L11.0667 0.733276L4.00006 7.79994Z" fill="#FFFFFE"/>
            </svg>

        )
    }
}

class IconCancel extends React.Component {
    render() {
        return (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z" fill="#FFFFFE"/>
            </svg>
        )
    }
}

class IconPencil extends React.Component {
    render() {
        return (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9.55568V12H2.44432L9.65345 4.79087L7.20913 2.34655L0 9.55568ZM12 2.44432L9.55568 0L7.90657 1.65562L10.3509 4.09995L12 2.44432V2.44432Z" fill="#FFFFFE"/>
            </svg>
        )
    }
}

class IconAlert extends React.Component {
    render() {
        return (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6.6 9H5.4V7.8H6.6V9ZM6.6 6.6H5.4V3H6.6V6.6Z" fill="#FFFFFE"/>
            </svg>
        )
    }
}



export { IconDelete, IconCheck, IconCancel, IconPencil, IconAlert }