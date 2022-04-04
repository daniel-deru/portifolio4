export const projectVariant = {
    hidden: {
      x: "100vw"
    },
    visible: index => ({
      x: 0,
      rotate: 360,
      transition: {
        duration: 1,
        delay: index * 0.5,
        ease: "easeOut"
      }
    })
  }

  export const childVariant = {
    visible: index => ({
      rotate: -360,
      transition: {
        duration: 1,
        delay: index * 0.5,
        ease: "easeOut"
      }
    })
  }
