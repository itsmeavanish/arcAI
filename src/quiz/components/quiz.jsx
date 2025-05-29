import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import confetti from "canvas-confetti"
import { CheckCircle, XCircle, Clock, Trophy } from "lucide-react"
import { Card } from "./ui/Card"
import { Button } from "./ui/button"
import { Progress } from "@radix-ui/react-progress"

const quizQuestions = [
  {
    question: "What will the following code print?\n\n```python\ndef outer():\n    x = 5\n    def inner():\n        print(x)\n    x = 10\n    return inner\n\nf = outer()\nf()\n```",
    options: [
      "5",
      "10",
      "Error: x is not defined",
      "None",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "What will the following code print?\n\n```python\ndef add_to_list(val, lst=[]):\n    lst.append(val)\n    return lst\n\nprint(add_to_list(1))\nprint(add_to_list(2))\n```",
    options: [
      "[1] [2]",
      "[1] [1, 2]",
      "[1, 2] [1, 2]",
      "Error",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "Which of the following Python expressions creates a set?",
    options: [
      "{x for x in range(5)}",
      "(x for x in range(5))",
      "[x for x in range(5)]",
      "dict.fromkeys(range(5))",
    ],
    correctAnswer: 0,
    time: 1,
  },
  {
    question: "What will the following decorator do?\n\n```python\ndef decorator(func):\n    def wrapper():\n        print(\"Before\")\n        func()\n        print(\"After\")\n    return wrapper\n\n@decorator\ndef say_hello():\n    print(\"Hello\")\n\nsay_hello()\n```",
    options: [
      "Hello",
      "Before Hello After",
      "Before After Hello",
      "Error",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "Which Python data type is mutable?",
    options: [
      "Tuple",
      "String",
      "List",
      "Integer",
    ],
    correctAnswer: 2,
    time: 1,
  },
  {
    question: "What is the output of the following Python code?\n\n```python\ndef func(a, b, c):\n    print(a, b, c)\n\nargs = [1, 2]\nkwargs = {'c': 3}\nfunc(*args, **kwargs)\n```",
    options: [
      "1 2 3",
      "{'a': 1, 'b': 2} {'c': 3}",
      "Error: too many arguments",
      "Error: unexpected keyword argument",
    ],
    correctAnswer: 0,
    time: 1,
  },
  {
    question: "Which of the following is NOT true about Python generators?",
    options: [
      "They use the 'yield' keyword to return values.",
      "They can be iterated over lazily.",
      "They consume more memory than lists.",
      "They can maintain state between iterations.",
    ],
    correctAnswer: 2,
    time: 1,
  },
  {
    question: "What does the following code do?\n\n```python\ndef func():\n    try:\n        return 1\n    finally:\n        return 2\n\nprint(func())\n```",
    options: [
      "Prints 1",
      "Prints 2",
      "Error: conflicting return statements",
      "None",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "Which metric behavior most strongly suggests overfitting in a machine learning model?",
    options: [
      "Validation loss increases while training loss decreases",
      "Both training and validation loss decrease",
      "Training loss oscillates wildly",
      "Validation accuracy rises after each epoch",
    ],
    correctAnswer: 0,
    time: 1,
  },
  {
    question: "Which TensorFlow code snippet creates an embedding layer for an input sequence of token indices?",
    options: [
      "tf.keras.layers.Embedding(input_dim=5000, output_dim=64)",
      "tf.keras.layers.Dense(64)",
      "tf.nn.embedding_lookup(5000, 64)",
      "tf.keras.layers.Flatten()",
    ],
    correctAnswer: 0,
    time: 1,
  },
  {
    question: "What does the following Python code output?\n\n```python\nclass A:\n    def __init__(self):\n        self.x = 1\n    def print(self):\n        print(self.x)\n\na = A()\na.print()\n```",
    options: [
      "Error: print is a reserved keyword",
      "1",
      "None",
      "Error: method missing argument",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "Which of the following is a correct implementation of contrastive loss in TensorFlow?",
    options: [
      "tf.keras.losses.MeanSquaredError()",
      "def contrastive_loss(y_true, y_pred): return y_true * tf.square(y_pred) + (1 - y_true) * tf.square(tf.maximum(1 - y_pred, 0))",
      "tf.nn.softmax_cross_entropy_with_logits(y_true, y_pred)",
      "tf.reduce_sum(y_pred - y_true)",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "What will the following code output?\n\n```python\nx = [1, 2, 3]\ny = x\ny[0] = 0\nprint(x)\n```",
    options: [
      "[1, 2, 3]",
      "[0, 2, 3]",
      "Error: assignment to y affects only y",
      "None",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "Which Python function is used to iterate over two lists simultaneously?",
    options: [
      "map()",
      "filter()",
      "zip()",
      "reduce()",
    ],
    correctAnswer: 2,
    time: 1,
  },
  {
    question: "What does the following Python code snippet do?\n\n```python\nx = {1, 2, 3}\ny = {3, 4, 5}\nz = x.intersection(y)\nprint(z)\n```",
    options: [
      "{1, 2, 3, 4, 5}",
      "{3}",
      "{}",
      "Error",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "Which data structure in Python supports fast insertion, deletion, and lookup by key?",
    options: [
      "List",
      "Dictionary",
      "Tuple",
      "Set",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "What will the following code snippet produce?\n\n```python\ndef func():\n    yield 1\n    yield 2\n    yield 3\n\ngen = func()\nprint(next(gen))\nprint(next(gen))\n```",
    options: [
      "1 2",
      "1 3",
      "Error: generator exhausted",
      "1 None",
    ],
    correctAnswer: 0,
    time: 1,
  },
  {
    question: "What is the result of the following Python code?\n\n```python\na = (1, 2)\nb = (3, 4)\nprint(a + b)\n```",
    options: [
      "(4, 6)",
      "(1, 2, 3, 4)",
      "Error: tuples cannot be added",
      "(1, 2) (3, 4)",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "What is the output of the following Python code?\n\n```python\ndef test():\n    for i in range(3):\n        yield i\n\nprint(list(test()))\n```",
    options: [
      "[0, 1, 2]",
      "3",
      "Error: test is not callable",
      "None",
    ],
    correctAnswer: 0,
    time: 1,
  },
  {
    question: "What is the primary use of the Python 'itertools' module?",
    options: [
      "Perform string manipulations",
      "Provide tools for working with iterators",
      "Manage multithreading",
      "Handle JSON serialization",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "Which of the following will correctly read a text file and print each line in Python?",
    options: [
      "with open('file.txt') as f: for line in f: print(line)",
      "open('file.txt').readlines()",
      "with open('file.txt', 'w') as f: print(f.readlines())",
      "print(open('file.txt', 'r').read())",
    ],
    correctAnswer: 0,
    time: 1,
  },
  {
    question: "What is the result of the following Python code?\n\n```python\ndef func(x=[]):\n    x.append(1)\n    return x\n\nprint(func())\nprint(func())\n```",
    options: [
      "[1] [1]",
      "[1] [1, 1]",
      "[] []",
      "Error: function takes no arguments",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "How does Python handle integer division?",
    options: [
      "Using the '/' operator",
      "Using the '//' operator",
      "By automatically converting the result to a float",
      "By raising an error for non-integer operands",
    ],
    correctAnswer: 1,
    time: 1,
  },
  {
    question: "What is the output of the following Python code?\n\n```python\nx = [i * 2 for i in range(3)]\nprint(x)\n```",
    options: [
      "[0, 1, 2]",
      "[0, 2, 4]",
      "[0, 2, 6]",
      "Error: list comprehension syntax invalid",
    ],
    correctAnswer: 1,
    time: 1,
  },

  {
    question: "What is the output of the following Python code?\n\n```python\nfrom functools import lru_cache\n\n@lru_cache\ndef fibonacci(n):\n    if n < 2: return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(5))\n```",
    options: [
      "5",
      "8",
      "13",
      "Error: LRU cache decorator not applicable",
    ],
    correctAnswer: 1,
    time: 1,
  }
];


export default function Quiz({ onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [answered, setAnswered] = useState(false)
  const timerRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    if (showResult) return

    setTimeLeft(60)
    setAnswered(false)

    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          setAnswered(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [currentQuestion, showResult])

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${(timeLeft / 30) * 100}%`,
        duration: 0.5,
        ease: "power1.out",
      })
    }
  }, [timeLeft])

  const handleOptionSelect = (optionIndex) => {
    if (answered) return

    setSelectedOption(optionIndex)
    setAnswered(true)
    clearInterval(timerRef.current)

    if (optionIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore((score) => score + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((current) => current + 1)
    } else {
      setShowResult(true)

      if (score >= 3) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
    setTimeLeft(30)
    setAnswered(false)
  }

  return (
    <AnimatePresence mode="wait">
      {!showResult ? (
        <motion.div
          key="question"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card className="p-6 border border-primary/20 shadow-xl backdrop-blur-sm bg-card/80">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">
                Question {currentQuestion + 1}/{quizQuestions.length}
              </h2>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-mono">{timeLeft}s</span>
              </div>
            </div>

            <div className="h-2 w-full bg-secondary/30 rounded-full mb-6 overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-primary rounded-full transition-all duration-1000"
                style={{ width: `${(timeLeft / 30) * 100}%` }}
              />
            </div>

            <h3 className="text-2xl font-semibold mb-6">{quizQuestions[currentQuestion].question}</h3>

            <div className="space-y-3 mb-6">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={!answered ? { scale: 1.02 } : {}}
                  whileTap={!answered ? { scale: 0.98 } : {}}
                >
                  <Button
                    variant={
                      answered
                        ? index === quizQuestions[currentQuestion].correctAnswer
                          ? "outline"
                          : selectedOption === index
                          ? "destructive"
                          : "outline"
                        : selectedOption === index
                        ? "default"
                        : "outline"
                    }
                    className={`w-full justify-start text-left p-4 h-auto ${
                      answered && index === quizQuestions[currentQuestion].correctAnswer
                        ? "border-green-500 bg-green-500/10"
                        : ""
                    }`}
                    onClick={() => handleOptionSelect(index)}
                    disabled={answered}
                  >
                    <div className="flex items-center gap-3">
                      {answered && index === quizQuestions[currentQuestion].correctAnswer && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {answered &&
                        selectedOption === index &&
                        index !== quizQuestions[currentQuestion].correctAnswer && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      <span>{option}</span>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={handleNextQuestion}
              disabled={!answered}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
            >
              {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card className="p-6 border border-primary/20 shadow-xl backdrop-blur-sm bg-card/80">
            <div className="flex flex-col items-center text-center">
              <Trophy className="h-16 w-16 text-yellow-500 mb-4" />
              <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
              <p className="text-xl mb-6">
                Your score: {score}/{quizQuestions.length}
              </p>

              <Progress value={(score / quizQuestions.length) * 100} className="h-3 w-full mb-8" />

              <p className="mb-6 text-muted-foreground">
                {score === quizQuestions.length
                  ? "Perfect score! You're an AI expert!"
                  : score >= 3
                  ? "Great job! You know your AI concepts well."
                  : "Keep learning about AI and try again!"}
              </p>

              <div className="flex gap-4 w-full">
                <Button variant="outline" onClick={onFinish} className="flex-1">
                  Back to Dashboard
                </Button>
                <Button
                  onClick={resetQuiz}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  Try Again
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
