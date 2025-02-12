import React, { createContext, useContext, useState, useEffect } from "react"

type Props = {
  children: React.ReactNode
}

type GameState = {
  count: number
}

type GameActions ={
  setCount: React.Dispatch<React.SetStateAction<number>>
}

type Context = {
  state: GameState
  actions: GameActions
}

const GameContext = createContext<Context | null>(null)

export const GameContextProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(42)
  }, [])

  const state = {
    count
  }

  const actions = {
    setCount,
  }
  return (
    <GameContext.Provider value={{ state, actions }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGameState = () => {
  const context = useContext(GameContext)

  if (!context)
    throw new Error("GameContext must be called from within the GameContextProvider")

  return context.state
}


export const useGameActions = () => {
  const context = useContext(GameContext)

  if (!context)
    throw new Error("GameContext must be called from within the GameContextProvider")

  return context.actions
}


