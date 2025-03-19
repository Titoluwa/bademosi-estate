"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, Key, Home, MousePointerClick, HandCoins } from "lucide-react"

function Bubble({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
    return (
        <motion.circle
            cx={x}
            cy={y}
            r={size}
            fill={color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0.7, 0.3, 0.7],
                scale: [1, 1.2, 1],
                x: x + Math.random() * 100 - 50,
                y: y + Math.random() * 100 - 50,
            }}
            transition={{
                duration: 5 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
            }}
        />
    )
}

function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])

  useEffect(() => {
    const colors = [
      `rgba(30, 42, 73, 0.5)`, // #1E2A49 with opacity
      `rgba(255, 90, 60, 0.3)`, // #FF5A3C with opacity
      `rgba(30, 42, 73, 0.2)`,
      `rgba(255, 90, 60, 0.2)`,
      `rgba(56, 84, 157, 0.2)`,
      `rgba(251, 101, 74, 0.5)`,
    ]

    const newBubbles = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setBubbles(newBubbles)
    // const interval = setInterval(setBubbles(newBubbles), 3000);
    // return () => clearInterval(interval);
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <title>Floating Bubbles</title>
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  )
}

export default function FloatingBubblesBackground() {
    const steps = [
        {
            icon: <MousePointerClick className="h-8 w-8" />,
            title: "Choose Your Stay",
            description: "Select your dates and check availability",
        },
        {
            icon: <HandCoins className="h-8 w-8" />,
            title: "Confirm & Pay",
            description: "Secure your booking with easy payment.",
        },
        {
            icon: <Home className="h-8 w-8" />,
            title: "Enjoy your Stay",
            description: "Relax in a fully-furnished home",
        },
    ]

    return (
        <div className="relative min-h-96 px-10 py-32 text-white w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E2A49]/90 to-[#1E2A49]/70 dark:from-[#1E2A49] dark:to-[#1E2A49]/80">
            <FloatingBubbles />
            <motion.div className="relative z-10 container mx-auto px-4 md:px-6 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <motion.h2 className="text-3xl font-bold text-center mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
                    How It Works
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF5A3C] text-white mb-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-white">{step.description}</p>
                    </div>
                ))}
                </div>
            </motion.div>
        </div>
    )
}