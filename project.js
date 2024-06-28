const width = 142
setDocDimensions(width, 125)
const minBuildingHeight = 15
const maxBuildingHeight = 55
const spacingDistance = 38
const buildingWidth = 18
const windowSize = 7

const pencil = new bt.Turtle();
pencil.down()

function building() {
  const buildingHeight = bt.randIntInRange(minBuildingHeight, maxBuildingHeight)
  pencil.forward(spacingDistance)
  pencil.left(90)
  pencil.forward(buildingHeight)
  pencil.right(90)
  pencil.forward(buildingWidth)
  pencil.right(90)
  pencil.forward(buildingHeight)
  pencil.left(90)
}

let numBuildings = 0

// generate buildings based on length of canvas
while (pencil.pos[0] < (width - buildingWidth - spacingDistance)) {
  building()
  numBuildings++
}

function door(buildingNo) {
  pencil.jump([(buildingNo * spacingDistance) + ((buildingNo - 1) * buildingWidth) + (buildingWidth / 2) - 2, 0])
  pencil.left(90)
  pencil.forward(7)
  pencil.right(90)
  pencil.forward(4)
  pencil.right(90)
  pencil.forward(7)
  pencil.left(90)
}

function window(buildingNo) {
  const windowNoRow = buildingWidth/windowSize - 1
  const windowNoCol = buildingHeight/windowSize
  
  for (let i = 0; i < windowNoRow; i++) {
    const gap = ((buildingWidth % windowSize)/2)-0.5
    pencil.jump([(buildingNo * spacingDistance) + ((buildingNo - 1) * buildingWidth) + gap + (i*windowSize) + (i*1), 10])
    pencil.left(90)
    pencil.forward(windowSize)
    pencil.right(90)
    pencil.forward(windowSize)
    pencil.right(90)
    pencil.forward(windowSize)
    pencil.right(90)
    pencil.forward(windowSize)
    pencil.left(180)
  }
}

for (let i = 0; i < numBuildings; i++) {
  door(i+1)
  window(i+1)
}

drawLines(pencil.lines())