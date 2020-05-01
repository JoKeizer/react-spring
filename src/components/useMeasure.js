import { useRef, useState, useEffect } from 'react'
//message thing
import ResizeObserver from 'resize-observer-polyfill'

export default function UseMeasure() {
    //useRef bind to useMessage to div
    const ref = useRef()
    //bounds
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
    //usestate ResizeObserver rect
    const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
    //when changed
    useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
    //return ref and bounds
    return [{ ref }, bounds]
}