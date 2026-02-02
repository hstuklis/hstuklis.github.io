import React, { useEffect, useRef, useState, type JSX} from 'react'

interface Args {
    text?: string
    repeats?: number
    lines?: number
    classes?: string
    children?: React.ReactNode
}

export default function RepeatedTextBG({ 
    text = 'dev', 
    repeats = 100,
    lines = 100,
    classes = '', 
    children
}: Args) {
    const generateLines = () => {
        const result: JSX.Element[] = []
        for(let i = 0; i < lines; i++) {
            result.push(
                <div key={i}>{Array(repeats).fill(text).join(' ')}</div>
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