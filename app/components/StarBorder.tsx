"use client"

import type React from "react"

import "./StarBorder.css"

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "#FF2EC5",
  speed = "3s",
  children,
  ...rest
}: {
  as?: any
  className?: string
  color?: string
  speed?: string
  children: React.ReactNode
  [key: string]: any
}) => {
  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content text-left flex items-center justify-center border-double rounded-full">
        {children}
      </div>
    </Component>
  )
}

export default StarBorder
