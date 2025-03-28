import React from 'react'
import './DialogBox.css'

interface DialogBoxProps {
    name: string
    text: string
    avatar?: string | undefined
}

const DialogBox: React.FC<DialogBoxProps> = React.memo(({ name, text, avatar }) => {
    return (
        <div className="dialog-box">
            {avatar && (
                <img
                    src={avatar}
                    alt={name}
                    className="dialog-box-avatar"
                />
            )}

            <div className="dialog-box-content">
                <span className="dialog-box-name">{name}</span>
                <p className="dialog-box-text">{text}</p>
            </div>
        </div>
    )
})

export default DialogBox
