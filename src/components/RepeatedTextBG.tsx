import React, { useEffect, useRef, useState, type JSX } from 'react'

interface Args {
    text?: string
    repeats?: number
    lines?: number
    classes?: string
    children?: React.ReactNode
}

export default function RepeatedTextBG({
    text = 'dev',
    repeats: repeatsProp,
    lines: linesProp,
    classes = '',
    children
}: Args) {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const probeRef = useRef<HTMLDivElement>(null)
    // Lines default large in auto mode — the text div is already `overflow-hidden inset-0`
    // so CSS clips any excess. This avoids unreliable height measurement timing.
    const [r, setR] = useState(repeatsProp ?? 10)
    const l = linesProp ?? 50
    const isAutoWidth = repeatsProp === undefined

    useEffect(() => {
        if (!isAutoWidth) return

        const recalc = () => {
            const wrapper = wrapperRef.current
            const probe = probeRef.current
            if (!wrapper || !probe) return

            const { width } = wrapper.getBoundingClientRect()
            const { width: pw } = probe.getBoundingClientRect()
            if (!pw || !width) return

            setR(Math.ceil(width / pw) + 2)
        }

        const ro = new ResizeObserver(recalc)
        if (wrapperRef.current) ro.observe(wrapperRef.current)
        recalc()

        return () => ro.disconnect()
    }, [text, repeatsProp, isAutoWidth])

    const generateLines = () => {
        const result: JSX.Element[] = []
        for (let i = 0; i < l; i++) {
            result.push(<div key={i}>{Array(r).fill(text).join(' ')}</div>)
        }
        return result
    }

    return (
        <div ref={wrapperRef}>
            {isAutoWidth && (
                // Off-screen probe with same font classes to measure one text token
                <div
                    ref={probeRef}
                    className={classes}
                    aria-hidden="true"
                    style={{
                        position: 'fixed',
                        top: '-9999px',
                        left: '-9999px',
                        right: 'auto',
                        bottom: 'auto',
                        width: 'fit-content',
                        height: 'auto',
                        overflow: 'visible',
                        whiteSpace: 'nowrap',
                        opacity: 0,
                        pointerEvents: 'none',
                    }}
                >
                    {text + '\u00A0'}
                </div>
            )}
            <div className={classes}>{generateLines()}</div>
            {children && <div className="relative z-10">{children}</div>}
        </div>
    )
}
