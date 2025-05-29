import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Sun, Moon, Brain, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/Card"
import Quiz from "./quiz"
import Info from "./input"

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [showQuiz, setShowQuiz] = useState(false)
  const [theme, setTheme] = useState("light") // Manage theme internally for React
  const [input,setInput]=useState(false);

  // Update current time every second
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // GSAP animation for the dashboard elements
  useEffect(() => {
    if (mounted) {
      gsap.from(".dashboard-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    }
  }, [mounted])

  if (!mounted) return null

  // Toggle theme internally
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    // Optional: add logic to toggle class on document.body for theme
    if (theme === "dark") {
      document.body.classList.remove("dark")
    } else {
      document.body.classList.add("dark")
    }
  }

  return (
    <div className="w-full max-w-7xl mt-20 mx-auto p-4 md:p-8">
      {!input ? ( 
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
          <Card className="dashboard-card p-12 border border-primary/20 shadow-lg backdrop-blur-sm bg-card/80 max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Current Time</h2>
            </div>
            <p className="text-4xl font-mono text-center py-6">{currentTime}</p>
          </Card>

          <Card className="dashboard-card p-10 border border-primary/20 shadow-lg backdrop-blur-sm bg-card/80 w-fit">
            <h2 className="text-2xl font-semibold mb-4">Ready to Test Your AI Knowledge?</h2>
            <p className="mb-6 text-muted-foreground">
              Challenge yourself with our interactive quiz about artificial intelligence, machine learning, and the
              future of technology.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => setInput(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Start Quiz
              </Button>
            </motion.div>
          </Card>
        </div>
      ) : (

        !showQuiz ? <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className=" p-20 " >
                    <Info setShowQuiz={setShowQuiz}/></motion.div>

                 :
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Quiz onFinish={() => setShowQuiz(false)} />
        </motion.div>
      )}
    </div>
  )
}
