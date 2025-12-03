import React, { useEffect, useRef, useState, type JSX} from 'react'

interface args {
    text?: string
    classes?: string
    children?: React.ReactNode
}

export default function RepeatedTextBG({ text = 'dev', classes = '', children}: args) {
    const generateLines = () => {
        const result: JSX.Element[] = []
        for(let i = 0; i < 100; i++) {
            result.push(
                <div key={i}>{Array(100).fill(text).join(' ')}</div>
            )
        }
        return result
    }

    return (
        <div>
            <div className={`${classes}`}>{generateLines()}</div>
            {children && (
                <div className="relative z-10">
                    {children}
                </div>
            )}
        </div>
    )
}