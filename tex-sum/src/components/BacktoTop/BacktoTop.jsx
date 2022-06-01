import React from 'react'
import { useEffect, useState } from 'react'

function BacktoTop() {

    const [BacktoTop, setBacktoTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                setBacktoTop(true)
            } else {
                setBacktoTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>

            {BacktoTop && (
                <button style={{
                    position: "fixed",
                    botton: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                }}
                    onClick={scrollUp}>^</button>
            )}

        </div>
    )
}

export default BacktoTop