const debug = (engine) => {
  engine.render.context.save()

  engine.render.context.fillStyle = '#00ff00'
  engine.render.context.font = '12px Arial'
  engine.render.text({
    text: 'fps: ' + Math.round(1000 / engine.loop.delta),
    x: 200,
    y: 200
  })
  engine.render.text({
    text: 'keys: ' + Object.keys(engine.keys.cache).length,
    x: 200,
    y: 220
  })
  engine.render.text({
    text: 'pointers: ' + Object.keys(engine.pointers.cache).length,
    x: 200,
    y: 240
  })
  engine.render.text({
    text: 'entities: ' + engine.entities.cache.length,
    x: 200,
    y: 260
  })
  engine.render.text({
    text: 'component behaviours: ' + engine.behaviours.components.length,
    x: 200,
    y: 280
  })
  engine.render.text({
    text: 'component sprite: ' + engine.render.components.length,
    x: 200,
    y: 300
  })
  engine.render.text({
    text: 'component physics: ' + engine.physics.components.length,
    x: 200,
    y: 320
  })
  engine.render.text({
    text: 'component audio: ' + engine.audio.components.length,
    x: 200,
    y: 340
  })
  engine.render.text({
    text: 'component state: ' + Object.keys(engine.state.components).length,
    x: 200,
    y: 360
  })

  engine.render.context.save()
  engine.render.context.strokeStyle = '#00ff00'
  engine.render.context.lineWidth = '1'
  engine.render.context.textAlign = 'center'

  engine.render.context.strokeStyle = '#00ff00'
  engine.render.context.lineWidth = '1'
  engine.render.circle({
    x: engine.audio.listener.x,
    y: engine.audio.listener.y,
    radius: engine.audio.threshold
  })

  for (const i in engine.pointers.cache) {
    if (Object.hasOwnProperty.call(engine.pointers.cache, i)) {
      const pointer = engine.pointers.cache[i]
      if (pointer.hold) {
        engine.render.circle({
          x: pointer.startX,
          y: pointer.startY,
          radius: 60
        })

        engine.render.circle({
          x: pointer.x,
          y: pointer.y,
          radius: 30
        })

        engine.render.text({
          text: 'type: ' + pointer.type,
          x: pointer.startX,
          y: pointer.startY - 130
        })

        engine.render.text({
          text: 'id: ' + pointer.id,
          x: pointer.startX,
          y: pointer.startY - 115
        })

        engine.render.text({
          text: 'startX: ' + pointer.startX + ', startY: ' + pointer.startY,
          x: pointer.startX,
          y: pointer.startY - 100
        })

        engine.render.text({
          text: 'currentX: ' + pointer.x + ', currentY: ' + pointer.y,
          x: pointer.startX,
          y: pointer.startY - 85
        })

        engine.render.text({
          text: 'offsetX: ' + pointer.offsetX + ', offsetY: ' + (pointer.offsetY),
          x: pointer.startX,
          y: pointer.startY - 70
        })

        engine.render.line({
          ax: pointer.startX,
          ay: pointer.startY,
          bx: pointer.x,
          by: pointer.y
        })

        engine.render.rect({
          x: pointer.startX,
          y: pointer.startY,
          width: pointer.x - pointer.startX,
          height: pointer.y - pointer.startY
        })
      }
    }
  }
  engine.render.context.restore()
}
